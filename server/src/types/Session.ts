import { SessionData } from "express-session";

export interface SessionProps extends SessionData {
  token: string;
}
