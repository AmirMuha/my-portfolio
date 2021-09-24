import { Jwt, JwtHeader, JwtPayload } from "jsonwebtoken";

interface JwtPayloadType extends JwtPayload {
  id: string;
  iat: number;
  exp: number;
}
export interface JwtVerifyWithPayloadType extends Jwt {
  payload: JwtPayloadType;
  header: JwtHeader;
  signature: string;
}
