import { MiddlewareFn, NextFn } from "type-graphql";
import { MyContext } from "../types/MyContext";
import { Props } from "../types/Props";
import jwt from "jsonwebtoken";
import { JWT_PRIVATE_KEY } from "../constants/envs-and-consts";
import { JwtVerifyWithPayloadType } from "../types/JwtVerifyWithPayloadType";

export const isLoggedIn: MiddlewareFn<MyContext> = async (
  { context: { data, req, prisma } }: Props,
  next: NextFn
): Promise<NextFn> => {
  const token = req.session.token;
  if (!token) {
    throw new Error("Either your session exprired or you are not logged in.");
  }
  const verifiedToken = (await jwt.verify(token, JWT_PRIVATE_KEY, {
    complete: true,
  })) as JwtVerifyWithPayloadType;
  if (!verifiedToken.payload.id) {
    throw new Error("Either your session exprired or you are not logged in.");
  }
  const admin = await prisma.admin.findUnique({
    where: { id: verifiedToken.payload.id },
  });
  if (!admin)
    throw new Error("Either your session exprired or you are not logged in.");
  data.admin = admin;
  data.userId = verifiedToken.payload.id;
  return next();
};
