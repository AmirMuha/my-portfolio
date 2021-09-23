import { MiddlewareFn, NextFn } from "type-graphql";
import { MyContext } from "../types/MyContext";
import { Props } from "../types/Props";

const isAdmin: MiddlewareFn<MyContext> = async (
  { context: { req, data, prisma } }: Props,
  next: NextFn
): Promise<NextFn> => {
  const userId = req.session.userId;
  if (!userId) throw new Error("You are not logged in.");
  const user = await prisma.admin.findUnique({
    where: {
      id: userId,
    },
  });
  if (!user)
    throw new Error(
      "Only admins have access, You are not authorized as an admin."
    );
  return next();
};
export default isAdmin;
