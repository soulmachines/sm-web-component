export interface WebsocketMessage {
  transaction?: string;
  category: string;
  kind: string;
  name: string;
  body: any;
}
