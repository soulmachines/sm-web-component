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

  public async useSession(session: Session) {
    this.session = session;
    this.session.addEventListener('message', (message) =>
      this.onWebsocketMessage(message as MessageEvent),
    );

    return new Promise<void>((resolve, reject) => {
      // fail after a timeout period so this promise doesnt hang
      const timeout = setTimeout(() => reject(), 6000);
      // success is when the remote video stream has been created
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

  public useVideoElement(videoEl: HTMLVideoElement) {
    this.remoteVideoEl = videoEl;

    if (this.remoteStream) {
      this.remoteVideoEl.srcObject = this.remoteStream;
    }

    // TODO: resize watcher :: >
    if (this.remoteStream) {
      const bounds = this.remoteVideoEl.getBoundingClientRect();
      this.setStreamDimensions(bounds.width, bounds.height);
    }
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

  /**
   * ===============
   * PRIVATE API
   * ===============
   */

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
        this.onConnected(event);
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

    // create a local stream from the user's camera and microphone
    const webrtcOptions = this.session?.options.webrtc;
    const mediaConstraints = mediaConstraintsFromOptions(webrtcOptions);

    if (mediaConstraints.audio || mediaConstraints.video) {
      const stream = await navigator.mediaDevices.getUserMedia(mediaConstraints);
      this.localStream = stream;

      // publish the user's media stream on the RTC connection
      this.localStream.getTracks().forEach((track) => {
        if (this.localStream) {
          this.rtcPeerConnection?.addTrack(track, this.localStream);
        }
      });
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

  private onConnected(event: RtcConnectedEvent) {
    this.session?.log('webrtc: onConnected', { event });
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
    // the webrtc connection is actually complete.
    if (audioTracks && videoTracks) {
      this.remoteStream = event.streams[0];
      this.dispatchEvent(new Event('connected'));
    }
  }

  private sendWebsocketMessage(message: WebsocketMessage) {
    this.session?.sendMessage(message);
  }
}
