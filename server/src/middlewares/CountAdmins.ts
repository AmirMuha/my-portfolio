import { MiddlewareFn, NextFn } from "type-graphql";
import { MyContext } from "../types/MyContext";
import { Props } from "../types/Props";

const countAdmins: MiddlewareFn<MyContext> = async (
  { context: { data, prisma } }: Props,
  next: NextFn
): Promise<NextFn> => {
  const numberOfAdmins = await prisma.admin.count({});
  data.numberOfAdmins = numberOfAdmins;
  return next();
};
export default countAdmins;
