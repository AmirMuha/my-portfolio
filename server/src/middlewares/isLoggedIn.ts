import { MiddlewareFn, NextFn } from "type-graphql";
import { MyContext } from "../types/MyContext";
import { Props } from "../types/Props";
import jwt from "jsonwebtoken";
import { JWT_PRIVATE_KEY } from "../constants/environment-variables";

export const isLoggedIn: MiddlewareFn<MyContext> = async (
  { context: { data, req } }: Props,
  next: NextFn
): Promise<NextFn> => {
  const token = req.session.token;
  if (!token)
    throw new Error("Either your session exprired or you are not logged in.");
  const userId = await jwt.verify(token, JWT_PRIVATE_KEY);
  if (!userId)
    throw new Error("Either your session exprired or you are not logged in.");
  data.userId = userId;
  return next();
};
