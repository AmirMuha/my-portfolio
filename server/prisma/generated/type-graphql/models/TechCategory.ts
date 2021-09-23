import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Project } from "../models/Project";
import { Tech } from "../models/Tech";
import { TechCategoryCount } from "../resolvers/outputs/TechCategoryCount";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class TechCategory {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  techs?: Tech[];

  project?: Project;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  project_id!: string;

  @TypeGraphQL.Field(_type => TechCategoryCount, {
    nullable: true
  })
  _count?: TechCategoryCount | null;
}
