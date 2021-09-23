import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuestionCreateOrConnectWithoutAnswerInput } from "../inputs/QuestionCreateOrConnectWithoutAnswerInput";
import { QuestionCreateWithoutAnswerInput } from "../inputs/QuestionCreateWithoutAnswerInput";
import { QuestionUpdateWithoutAnswerInput } from "../inputs/QuestionUpdateWithoutAnswerInput";
import { QuestionUpsertWithoutAnswerInput } from "../inputs/QuestionUpsertWithoutAnswerInput";
import { QuestionWhereUniqueInput } from "../inputs/QuestionWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class QuestionUpdateOneWithoutAnswerInput {
  @TypeGraphQL.Field(_type => QuestionCreateWithoutAnswerInput, {
    nullable: true
  })
  create?: QuestionCreateWithoutAnswerInput | undefined;

  @TypeGraphQL.Field(_type => QuestionCreateOrConnectWithoutAnswerInput, {
    nullable: true
  })
  connectOrCreate?: QuestionCreateOrConnectWithoutAnswerInput | undefined;

  @TypeGraphQL.Field(_type => QuestionUpsertWithoutAnswerInput, {
    nullable: true
  })
  upsert?: QuestionUpsertWithoutAnswerInput | undefined;

  @TypeGraphQL.Field(_type => QuestionWhereUniqueInput, {
    nullable: true
  })
  connect?: QuestionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => QuestionUpdateWithoutAnswerInput, {
    nullable: true
  })
  update?: QuestionUpdateWithoutAnswerInput | undefined;
}
