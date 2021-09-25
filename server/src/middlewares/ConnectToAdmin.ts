import { MiddlewareFn, NextFn } from "type-graphql";
import { MyContext } from "../types/MyContext";
import { Props } from "../types/Props";

export const ConnectToAdmin: MiddlewareFn<MyContext> = async ({
  context: { prisma, data },
  args,
}: Props): Promise<string> => {
  const model = data.info.fieldName.split("create")[1].toLocaleLowerCase();
  const s = prisma as any;
  const as = s[model];
  const cr = as.create as any;
  const project = await cr({
    data: {
      ...args.data,
      admin: {
        connect: {
          email: data.admin.email,
        },
      },
    },
  });
  return project;
};
