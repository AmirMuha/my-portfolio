import * as TypeGraphQL from "type-graphql";
import { About } from "../../../models/About";
import { Admin } from "../../../models/Admin";
import { Message } from "../../../models/Message";
import { Project } from "../../../models/Project";
import { Stack } from "../../../models/Stack";
import { AdminAboutArgs } from "./args/AdminAboutArgs";
import { AdminMessagesArgs } from "./args/AdminMessagesArgs";
import { AdminProjectsArgs } from "./args/AdminProjectsArgs";
import { AdminStackArgs } from "./args/AdminStackArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Admin)
export class AdminRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [About], {
    nullable: false
  })
  async about(@TypeGraphQL.Root() admin: Admin, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AdminAboutArgs): Promise<About[]> {
    return getPrismaFromContext(ctx).admin.findUnique({
      where: {
        id: admin.id,
      },
    }).about(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Message], {
    nullable: false
  })
  async messages(@TypeGraphQL.Root() admin: Admin, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AdminMessagesArgs): Promise<Message[]> {
    return getPrismaFromContext(ctx).admin.findUnique({
      where: {
        id: admin.id,
      },
    }).messages(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Project], {
    nullable: false
  })
  async projects(@TypeGraphQL.Root() admin: Admin, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AdminProjectsArgs): Promise<Project[]> {
    return getPrismaFromContext(ctx).admin.findUnique({
      where: {
        id: admin.id,
      },
    }).projects(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Stack], {
    nullable: false
  })
  async stack(@TypeGraphQL.Root() admin: Admin, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AdminStackArgs): Promise<Stack[]> {
    return getPrismaFromContext(ctx).admin.findUnique({
      where: {
        id: admin.id,
      },
    }).stack(args);
  }
}
