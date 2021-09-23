import { SessionData } from "express-session";

export interface SessionProps extends SessionData {
  userId: string;
  token: string;
}
