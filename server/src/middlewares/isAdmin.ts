import { MiddlewareFn } from "type-graphql";
import { MyContext } from "../types/MyContext";

export const isAdmin: MiddlewareFn<MyContext> = async (
  { context: { req } }: { context: MyContext },
  next
) => {
  console.log("HEADERS : ", req.headers);
  return next();
};
