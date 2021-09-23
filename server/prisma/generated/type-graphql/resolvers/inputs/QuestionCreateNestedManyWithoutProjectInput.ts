import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuestionCreateManyProjectInputEnvelope } from "../inputs/QuestionCreateManyProjectInputEnvelope";
import { QuestionCreateOrConnectWithoutProjectInput } from "../inputs/QuestionCreateOrConnectWithoutProjectInput";
import { QuestionCreateWithoutProjectInput } from "../inputs/QuestionCreateWithoutProjectInput";
import { QuestionWhereUniqueInput } from "../inputs/QuestionWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class QuestionCreateNestedManyWithoutProjectInput {
  @TypeGraphQL.Field(_type => [QuestionCreateWithoutProjectInput], {
    nullable: true
  })
  create?: QuestionCreateWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuestionCreateOrConnectWithoutProjectInput], {
    nullable: true
  })
  connectOrCreate?: QuestionCreateOrConnectWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => QuestionCreateManyProjectInputEnvelope, {
    nullable: true
  })
  createMany?: QuestionCreateManyProjectInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [QuestionWhereUniqueInput], {
    nullable: true
  })
  connect?: QuestionWhereUniqueInput[] | undefined;
}
