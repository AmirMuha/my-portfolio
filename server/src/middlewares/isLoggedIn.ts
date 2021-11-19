import { MiddlewareFn, NextFn } from "type-graphql";

import { JwtVerifyWithPayloadType } from "../types/JwtVerifyWithPayloadType";
import { MyContext } from "../types/MyContext";
import { Props } from "../types/Props";
import jwt from "jsonwebtoken";

export const isLoggedIn: MiddlewareFn<MyContext> = async (
  { context: { data, req, prisma }, args, info, root }: Props,
  next: NextFn
): Promise<NextFn> => {
  const operation = info.fieldName;
  if (
    operation.includes("create") ||
    operation.includes("update") ||
    operation.includes("delete")
  ) {
    if (args.data && args.data.admin && !args.data.admin.connect) {
      throw new Error("You cannot create a new admin or manipulate it.");
    }
  }
  const token = req.session.token;
  if (!token) {
    throw new Error("Either your session exprired or you are not logged in.");
  }
  const verifiedToken = jwt.verify(token, process.env.JWT_PRIVATE_KEY!, {
    complete: true,
  }) as JwtVerifyWithPayloadType;
  if (!verifiedToken.payload.id) {
    throw new Error("Either your session exprired or you are not logged in.");
  }
  const admin = await prisma.admin.findUnique({
    where: { id: verifiedToken.payload.id },
  });
  if (!admin)
    throw new Error("Either your session exprired or you are not logged in.");
  data.admin = admin;
  data.args = args;
  data.info = info;
  data.root = root;
  data.userId = verifiedToken.payload.id;
  return next();
};
