import { WebsocketMessage } from '../session/models/websocket-message';
import { RtcEstablishedEvent } from './events/rtc-established-event';
import { RtcOfferEvent } from './events/rtc-offer-event';
import { RtcAcceptedEvent } from './events/rtc-accepted-event';
import { RtcAnswerEvent } from './events/rtc-answer-event';
import { RtcConnectedEvent } from './events/rtc-connected-event';
import { RtcIceCandidateEvent } from './events/rtc-ice-candidate-event';
import { Session } from '../session/session';
import { RtcEventName } from './events/rtc-event-name.enum';
import { mediaConstraintsFromOptions } from './helpers/media-constraints-from-options';

export class WebRTCConnection extends EventTarget {
  public localStream?: MediaStream;

  public remoteStream?: MediaStream;
  public remoteVideoEl?: HTMLVideoElement;

  private session?: Session;
  private rtcPeerConnection?: RTCPeerConnection;
  // eslint-disable-next-line no-undef
  private audioTransceiver?: RTCRtpTransceiver;
  // eslint-disable-next-line no-undef
  private videoTransceiver?: RTCRtpTransceiver;

  public async useSession(session: Session) {
    this.session = session;
    this.session.addEventListener('message', (message) =>
      this.onWebsocketMessage(message as MessageEvent),
    );

    if (this.session.options.webrtc?.videoElement) {
      this.remoteVideoEl = this.session.options.webrtc?.videoElement;
    }

    return new Promise<void>((resolve, reject) => {
      // fail after a timeout period so this promise doesnt hang
      const timeout = setTimeout(() => reject(), 6000);
      // success is when the rtc peer connection has been connected
      this.addEventListener(
        'connected',
        () => {
          clearTimeout(timeout);
          resolve();
        },
        { once: true },
      );
    });
  }

  public async useVideoElement(videoEl: HTMLVideoElement) {
    this.remoteVideoEl = videoEl;

    if (this.remoteStream) {
      this.remoteVideoEl.srcObject = this.remoteStream;
    }

    // TODO: resize watcher :: >
    if (this.remoteStream) {
      const bounds = this.remoteVideoEl.getBoundingClientRect();
      this.setStreamDimensions(bounds.width, bounds.height);
    }

    return this.startVideo(this.remoteVideoEl);
  }

  public setStreamDimensions(width: number, height: number) {
    const scale = window.devicePixelRatio;

    this.sendWebsocketMessage({
      category: 'webrtc',
      kind: 'event',
      name: RtcEventName.VideoBounds,
      body: {
        width: Math.ceil(width * scale),
        height: Math.ceil(height * scale),
      },
    });
  }

  public setCameraActive(active: boolean) {
    if (active) {
      this.enableCamera();
    } else {
      this.disableCamera();
    }
  }

  public setMicrophoneActive(active: boolean) {
    if (active) {
      this.enableMicrophone();
    } else {
      this.disableMicrophone();
    }
  }

  public async startVideo(
    videoElement?: HTMLVideoElement,
  ): Promise<{ video: boolean; audio: boolean }> {
    const video = videoElement || this.remoteVideoEl;
    if (!video) {
      throw 'noVideoElement'; // makeError('Cannot find HTMLVideoElement', 'noVideoElement');
    }
    // best case, play with audio
    const playingWithAudio = await this.playVideoElement(video);
    if (playingWithAudio) {
      return {
        video: true,
        audio: true,
      };
    }

    //second-best case, play without audio
    video.muted = true;
    const playingWithoutAudio = await this.playVideoElement(video);
    if (playingWithoutAudio) {
      return {
        video: true,
        audio: false,
      };
    }
    //worst case, not able to play, require user interaction
    throw 'userInteractionRequired'; // makeError('Cannot start media playback', 'userInteractionRequired');
  }

  /**
   * ===============
   * PRIVATE API
   * ===============
   */

  private async playVideoElement(videoElement: HTMLVideoElement): Promise<boolean> {
    try {
      await videoElement.play();
      return true;
    } catch (e) {
      return false;
    }
  }

  private async enableMicrophone() {
    if (this.audioTransceiver?.sender.track) {
      this.audioTransceiver.sender.track.enabled = true;
    } else {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true }); // TODO: more specific than 'true'
      const newAudioTrack = stream
        .getTracks()
        .find((track: MediaStreamTrack) => track.kind === 'audio');

      if (newAudioTrack) {
        this.audioTransceiver?.sender.replaceTrack(newAudioTrack);
        this.remoteStream?.addTrack(newAudioTrack); // TODO: remove old track??
      }
    }
  }

  private async disableMicrophone() {
    if (this.audioTransceiver?.sender.track) {
      this.audioTransceiver.sender.track.enabled = false;
    } else {
      throw 'cant disable mic, no audio stream';
    }
  }

  private async enableCamera() {
    if (this.videoTransceiver?.sender.track) {
      this.videoTransceiver.sender.track.enabled = true;
    } else {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true }); // TODO: more specific than 'true'
        const newVideoTrack = stream
          .getTracks()
          .find((track: MediaStreamTrack) => track.kind === 'video');

        if (newVideoTrack) {
          this.videoTransceiver?.sender.replaceTrack(newVideoTrack);
          this.remoteStream?.addTrack(newVideoTrack); // TODO: remove old track??
        }
      } catch (e) {
        // TODO: handle permissions denied error here
      }
    }
  }

  private async disableCamera() {
    if (this.videoTransceiver?.sender.track) {
      this.videoTransceiver.sender.track.enabled = false;
    } else {
      throw 'cant disable camera, no video stream';
    }
  }

  private onWebsocketMessage(message: MessageEvent) {
    const payload = message.data;
    const eventName = payload.name;
    const event = payload.body;

    switch (eventName) {
      case RtcEventName.Established:
        this.onEstablished(event);
        break;
      case RtcEventName.Offer:
        this.onSdpOffer(event);
        break;
      case RtcEventName.Accepted:
        this.onAccepted(event);
        break;
      case RtcEventName.Answer:
        this.onSdpAnswer(event);
        break;
      case RtcEventName.Connected:
        this.onRtcConnected(event);
        break;
      case RtcEventName.Ice:
        this.onRemoteIceCandidate(event);
    }
  }

  /**
   * The session's websocket has opened, and the server has
   * sent an 'established' message.
   *
   * The server config info in the message can be used to
   * begin negotiation of a webrtc connection.
   */
  private onEstablished(event: RtcEstablishedEvent) {
    this.session?.log(`webrtc: onEstablished`, { event });

    // TODO: explain
    const iceServers: any[] = event.iceServers || [];
    const hasTurnServer = iceServers.includes((server: any) =>
      server.urls.includes((url: any) => url.indexOf('turn:') === 0),
    );
    const iceTransportPolicy = hasTurnServer ? 'relay' : 'all';

    // eslint-disable-next-line no-undef
    const rtcConfig: RTCConfiguration = {
      iceServers,
      iceTransportPolicy,
    };

    this.connectRTC(rtcConfig);
  }

  /**
   * Use the webrtc configuration received from the server
   * to create a peer connection and add the media stream
   * from the user's side.
   *
   * TODO: link to learn more about SDP
   */
  // TODO: RTCConfiguration not defined
  // eslint-disable-next-line no-undef
  private async connectRTC(rtcConfig: RTCConfiguration) {
    // create an RTC connection for sharing media both ways
    this.rtcPeerConnection = new RTCPeerConnection(rtcConfig);
    this.rtcPeerConnection.addEventListener('icecandidate', (event) =>
      this.onLocalIceCandidate(event),
    );
    this.rtcPeerConnection.addEventListener('track', (event) => this.onRemoteTrackAdded(event));

    // use transceivers for the streaming so that we can
    // enable/disable cam/mic without renegotiation
    // https://blog.mozilla.org/webrtc/rtcrtptransceiver-explored/
    this.audioTransceiver = this.rtcPeerConnection.addTransceiver('audio', {
      direction: 'sendrecv',
    });
    this.videoTransceiver = this.rtcPeerConnection.addTransceiver('video', {
      direction: 'sendrecv',
    });

    // get the media constraints defined by the session options
    // so we know what combination of cam/mic to request up-front
    const webrtcOptions = this.session?.options.webrtc;
    const mediaConstraints = mediaConstraintsFromOptions(webrtcOptions);

    // if either of the user's camera or microphone are wanted,
    // create a local stream from the user's camera and microphone
    if (mediaConstraints.audio || mediaConstraints.video) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(mediaConstraints);
        this.localStream = stream;

        // publish the user's media stream on the RTC connection
        this.localStream.getTracks().forEach((track) => {
          if (this.localStream) {
            this.rtcPeerConnection?.addTrack(track);
          }
        });
      } catch (e) {
        // TODO: handle permissions denied error here
      }
    }

    this.sendSdpOffer();
  }

  /**
   * Once the rtc connection is configured, we can send the
   * server an sdp offer describing our streaming requirements.
   *
   * We send our own sdp offers on the session websocket,
   * and we also receive offers back from the server.
   */
  private sendSdpOffer() {
    const offerOptions: any = {
      voiceActivityDetection: false,
      offerToReceiveAudio: true,
      offerToReceiveVideo: true,
    };
    this.rtcPeerConnection
      ?.createOffer(offerOptions)
      .then((offer) => this.rtcPeerConnection?.setLocalDescription(offer))
      .then(() =>
        this.sendWebsocketMessage({
          category: 'webrtc',
          kind: 'event',
          name: RtcEventName.Offer,
          body: this.rtcPeerConnection?.localDescription?.toJSON(),
        }),
      );
  }

  /**
   * If we receive an sdp offer we must send back an answer
   */
  private onSdpOffer(event: RtcOfferEvent) {
    this.session?.log(`webrtc: onSdpOffer received`, { event });

    const description = new RTCSessionDescription(event);

    if (!this.rtcPeerConnection) {
      throw 'webrtc not connected';
    }

    this.rtcPeerConnection
      .setRemoteDescription(description)
      .then(() => this.rtcPeerConnection?.createAnswer())
      .then((answer) =>
        this.sendWebsocketMessage({
          category: 'webrtc',
          kind: 'event',
          name: RtcEventName.Answer,
          body: answer,
        }),
      );
  }

  private onAccepted(event: RtcAcceptedEvent) {
    this.session?.log('webrtc: accepted', { event });
    if (this.session) {
      this.session.sessionId = event.sessionId;
    }

    if (!this.remoteVideoEl) {
      // set a default width and height for the video
      this.setStreamDimensions(800, 600);
    }
  }

  private onSdpAnswer(event: RtcAnswerEvent) {
    this.session?.log('webrtc: onSdpAnswer', { event });
    const description = new RTCSessionDescription(event);
    this.rtcPeerConnection?.setRemoteDescription(description);
  }

  private onRtcConnected(event: RtcConnectedEvent) {
    this.session?.log('webrtc: onRtcConnected', { event });
    this.dispatchEvent(new Event('connected'));
  }

  private onRemoteIceCandidate(event: RtcIceCandidateEvent) {
    this.session?.log('webrtc: onRemoteIceCandidate', { event });

    // event.candidate will be null when ice gathering is complete.
    // this signal does not need to be delivered to the remote peer.
    // https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/icecandidate_event
    if (event.candidate) {
      const iceCandidate = new RTCIceCandidate(event);
      this.rtcPeerConnection?.addIceCandidate(iceCandidate);
    }
  }

  private onLocalIceCandidate(event: RTCPeerConnectionIceEvent) {
    this.session?.log('webrtc: onIceCandidate', { event });

    // event.candidate will be null when ice gathering is complete.
    // this signal does not need to be delivered to the remote peer.
    // https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/icecandidate_event
    if (event.candidate) {
      // forward the candidate to the remote server
      this.sendWebsocketMessage({
        category: 'webrtc',
        kind: 'event',
        name: RtcEventName.Ice,
        body: event.candidate,
      });
    }
  }

  /**
   * A media track from the server has been added to the
   * webrtc connection.
   */
  private onRemoteTrackAdded(event: RTCTrackEvent) {
    this.session?.log(`webrtc: remoteTrackAdded`, { event });

    // get access to the stream that's being modified
    const remoteStream = event.streams[0];

    // check how many tracks we have so far
    const audioTracks = remoteStream.getAudioTracks();
    const videoTracks = remoteStream.getVideoTracks();

    // the audio and video tracks are added separately.
    // we need to wait until both are added to say that
    // the remote stream is actually ready.
    if (audioTracks && videoTracks) {
      this.remoteStream = event.streams[0];
      // this.dispatchEvent(new Event('connected'));
    }
  }

  private sendWebsocketMessage(message: WebsocketMessage) {
    this.session?.sendMessage(message);
  }
}
