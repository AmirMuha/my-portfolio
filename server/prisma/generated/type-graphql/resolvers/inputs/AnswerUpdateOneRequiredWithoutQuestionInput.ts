import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnswerCreateOrConnectWithoutQuestionInput } from "../inputs/AnswerCreateOrConnectWithoutQuestionInput";
import { AnswerCreateWithoutQuestionInput } from "../inputs/AnswerCreateWithoutQuestionInput";
import { AnswerUpdateWithoutQuestionInput } from "../inputs/AnswerUpdateWithoutQuestionInput";
import { AnswerUpsertWithoutQuestionInput } from "../inputs/AnswerUpsertWithoutQuestionInput";
import { AnswerWhereUniqueInput } from "../inputs/AnswerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AnswerUpdateOneRequiredWithoutQuestionInput {
  @TypeGraphQL.Field(_type => AnswerCreateWithoutQuestionInput, {
    nullable: true
  })
  create?: AnswerCreateWithoutQuestionInput | undefined;

  @TypeGraphQL.Field(_type => AnswerCreateOrConnectWithoutQuestionInput, {
    nullable: true
  })
  connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | undefined;

  @TypeGraphQL.Field(_type => AnswerUpsertWithoutQuestionInput, {
    nullable: true
  })
  upsert?: AnswerUpsertWithoutQuestionInput | undefined;

  @TypeGraphQL.Field(_type => AnswerWhereUniqueInput, {
    nullable: true
  })
  connect?: AnswerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AnswerUpdateWithoutQuestionInput, {
    nullable: true
  })
  update?: AnswerUpdateWithoutQuestionInput | undefined;
}
