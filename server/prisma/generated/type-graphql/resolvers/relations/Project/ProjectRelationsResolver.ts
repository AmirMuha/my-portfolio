import * as TypeGraphQL from "type-graphql";
import { Admin } from "../../../models/Admin";
import { Project } from "../../../models/Project";
import { Question } from "../../../models/Question";
import { Sketch } from "../../../models/Sketch";
import { TechCategory } from "../../../models/TechCategory";
import { ProjectQuestionsArgs } from "./args/ProjectQuestionsArgs";
import { ProjectSketchesArgs } from "./args/ProjectSketchesArgs";
import { ProjectTech_categoriesArgs } from "./args/ProjectTech_categoriesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Project)
export class ProjectRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [TechCategory], {
    nullable: false
  })
  async tech_categories(@TypeGraphQL.Root() project: Project, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProjectTech_categoriesArgs): Promise<TechCategory[]> {
    return getPrismaFromContext(ctx).project.findUnique({
      where: {
        id: project.id,
      },
    }).tech_categories(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Question], {
    nullable: false
  })
  async questions(@TypeGraphQL.Root() project: Project, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProjectQuestionsArgs): Promise<Question[]> {
    return getPrismaFromContext(ctx).project.findUnique({
      where: {
        id: project.id,
      },
    }).questions(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Sketch], {
    nullable: false
  })
  async sketches(@TypeGraphQL.Root() project: Project, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProjectSketchesArgs): Promise<Sketch[]> {
    return getPrismaFromContext(ctx).project.findUnique({
      where: {
        id: project.id,
      },
    }).sketches(args);
  }

  @TypeGraphQL.FieldResolver(_type => Admin, {
    nullable: false
  })
  async admin(@TypeGraphQL.Root() project: Project, @TypeGraphQL.Ctx() ctx: any): Promise<Admin> {
    return getPrismaFromContext(ctx).project.findUnique({
      where: {
        id: project.id,
      },
    }).admin({});
  }
}
