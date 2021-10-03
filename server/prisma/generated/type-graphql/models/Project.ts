import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Admin } from "../models/Admin";
import { Question } from "../models/Question";
import { Sketch } from "../models/Sketch";
import { TechCategory } from "../models/TechCategory";
import { ProjectCount } from "../resolvers/outputs/ProjectCount";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Project {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  image!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  github_url!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  app_url!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  tech_categories?: TechCategory[];

  questions?: Question[];

  sketches?: Sketch[];

  admin?: Admin;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  admin_id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => ProjectCount, {
    nullable: true
  })
  _count?: ProjectCount | null;
}
