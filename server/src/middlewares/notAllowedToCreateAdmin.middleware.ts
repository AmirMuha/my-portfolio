import { MiddlewareFn, NextFn } from "type-graphql";
import { MyContext } from "../types/myContext.type";

export const NotAllowedToCreateAdmin: MiddlewareFn<MyContext> =
  async (): Promise<NextFn> => {
    throw new Error("You cannot create a new admin, there is on already.");
  };
