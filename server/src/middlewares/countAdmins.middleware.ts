import { MiddlewareFn, NextFn } from "type-graphql";

import { MyContext } from "../types/myContext.type";
import { Props } from "../types/props.type";

const CountAdmins: MiddlewareFn<MyContext> = async (
  { context: { data, prisma } }: Props,
  next: NextFn
): Promise<NextFn> => {
  const numberOfAdmins = await prisma.admin.count({});
  data.numberOfAdmins = numberOfAdmins;
  return next();
};
export default CountAdmins;
