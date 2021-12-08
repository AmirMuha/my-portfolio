// import { MiddlewareFn } from "type-graphql";
// import { MyContext } from "../types/myContext.type";
// import { Props } from "../types/props.type";

// export const Update: MiddlewareFn<MyContext> = async ({
//   context: { prisma, data },
// }: Props): Promise<string> => {
//   const model = data.info.fieldName.split("update")[1].toLocaleLowerCase();
//   const s = prisma as any;
//   const as = s[model];
//   const up = as.update as any;
//   const updatedValue = await up({
//     data: data.args.data,
//     where: {
//       id: data.args.where.id,
//     },
//   });
//   return updatedValue;
// };
