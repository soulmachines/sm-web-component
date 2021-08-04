import { WebsocketMessage } from '../session/models/websocket-message';
import { RtcEstablishedEvent } from './events/rtc-established-event';
import { RtcOfferEvent } from './events/rtc-offer-event';
import { RtcAcceptedEvent } from './events/rtc-accepted-event';
import { RtcAnswerEvent } from './events/rtc-answer-event';
import { RtcConnectedEvent } from './events/rtc-connected-event';
import { RtcIceCandidateEvent } from './events/rtc-ice-candidate-event';
import { Session } from '../session/session';
import { RtcEventName } from './events/rtc-event-name.enum';

export class WebRTCConnection {
  public localStream: MediaStream;
  public remoteStream: MediaStream;

  private rtcPeerConnection: RTCPeerConnection;

  constructor(private session: Session) {
    console.log('>> add message listener');
    this.session.addEventListener('message', (message) => this.onWebsocketMessage(message));
  }

  public sendVideoBounds(width: number, height: number) {
    this.sendWebsocketMessage({
      category: 'webrtc',
      kind: 'event',
      name: RtcEventName.VideoBounds,
      body: {
        width,
        height,
      },
    });
  }

  private onWebsocketMessage(message: MessageEvent) {
    // console.log('>> onWebsocketMessage', message);

    const payload = JSON.parse(message.data);
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

  private onEstablished(event: RtcEstablishedEvent) {
    console.log('onEstablished', { event });

    const iceServers: any[] = event.iceServers || [];
    const hasTurnServer = iceServers.includes((server) =>
      server.urls.includes((url) => url.indexOf('turn:') === 0),
    );
    const iceTransportPolicy = hasTurnServer ? 'relay' : 'all';

    const rtcConfig: RTCConfiguration = {
      iceServers,
      iceTransportPolicy,
    };

    this.connect(rtcConfig);
  }

  private onSdpOffer(event: RtcOfferEvent) {
    console.log('onSdpOffer', { event });
    const description = new RTCSessionDescription(event);

    this.rtcPeerConnection
      .setRemoteDescription(description)
      .then(() => this.rtcPeerConnection.createAnswer())
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
    console.log('accepted, session_id = ' + event.sessionId);
    this.sendVideoBounds(200, 100);
  }

  private onSdpAnswer(event: RtcAnswerEvent) {
    console.log('onSdpAnswer', { event });
    const description = new RTCSessionDescription(event);
    this.rtcPeerConnection.setRemoteDescription(description);
  }

  private onConnected(event: RtcConnectedEvent) {
    console.log('onConnected', { event });
  }

  private onRemoteIceCandidate(event: RtcIceCandidateEvent) {
    console.log('onRemoteIceCandidate', { event });

    // event.candidate will be null when ice gathering is complete.
    // this signal does not need to be delivered to the remote peer.
    // https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/icecandidate_event
    if (event.candidate) {
      const iceCandidate = new RTCIceCandidate(event);
      this.rtcPeerConnection.addIceCandidate(iceCandidate);
    }
  }

  private connect(rtcConfig: any) {
    navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then((stream) => {
      this.localStream = stream;

      this.rtcPeerConnection = new RTCPeerConnection(rtcConfig);
      this.rtcPeerConnection.addEventListener('icecandidate', (event) =>
        this.onLocalIceCandidate(event),
      );
      this.rtcPeerConnection.addEventListener('track', (event) => this.onRemoteTrackAdded(event));

      this.localStream.getTracks().forEach((track) => {
        this.rtcPeerConnection.addTrack(track, this.localStream);
      });

      this.sendSdpOffer();
    });
  }

  private onLocalIceCandidate(event: RTCPeerConnectionIceEvent) {
    console.log('onIceCandidate', { event });

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

  private onRemoteTrackAdded(event: RTCTrackEvent) {
    console.log('onRemoteTrackAdded', { event });
    this.remoteStream = event.streams[0];
  }

  private sendSdpOffer() {
    const offerOptions: any = {
      voiceActivityDetection: false,
      offerToReceiveAudio: true,
      offerToReceiveVideo: true,
    };

    this.rtcPeerConnection
      .createOffer(offerOptions)
      .then((offer) => this.rtcPeerConnection.setLocalDescription(offer))
      .then(() =>
        this.sendWebsocketMessage({
          category: 'webrtc',
          kind: 'event',
          name: RtcEventName.Offer,
          body: this.rtcPeerConnection.localDescription.toJSON(),
        }),
      );
  }

  private sendWebsocketMessage(message: WebsocketMessage) {
    this.session.send(JSON.stringify(message));
  }
}
