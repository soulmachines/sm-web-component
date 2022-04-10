import { Session } from '../session/session';
export class Persona {
  public id?: string;

  private session?: Session;

  public async useSession(session: Session) {
    this.session = session;
  }
}
