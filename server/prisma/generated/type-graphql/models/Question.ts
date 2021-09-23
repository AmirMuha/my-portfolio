import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Answer } from "../models/Answer";
import { Project } from "../models/Project";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Question {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  question!: string;

  answer?: Answer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  answer_id!: string;

  project?: Project;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  project_id!: string;
}
