import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuestionCreateManyProjectInput } from "../inputs/QuestionCreateManyProjectInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class QuestionCreateManyProjectInputEnvelope {
  @TypeGraphQL.Field(_type => [QuestionCreateManyProjectInput], {
    nullable: false
  })
  data!: QuestionCreateManyProjectInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
