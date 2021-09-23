import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuestionCreateManyProjectInputEnvelope } from "../inputs/QuestionCreateManyProjectInputEnvelope";
import { QuestionCreateOrConnectWithoutProjectInput } from "../inputs/QuestionCreateOrConnectWithoutProjectInput";
import { QuestionCreateWithoutProjectInput } from "../inputs/QuestionCreateWithoutProjectInput";
import { QuestionScalarWhereInput } from "../inputs/QuestionScalarWhereInput";
import { QuestionUpdateManyWithWhereWithoutProjectInput } from "../inputs/QuestionUpdateManyWithWhereWithoutProjectInput";
import { QuestionUpdateWithWhereUniqueWithoutProjectInput } from "../inputs/QuestionUpdateWithWhereUniqueWithoutProjectInput";
import { QuestionUpsertWithWhereUniqueWithoutProjectInput } from "../inputs/QuestionUpsertWithWhereUniqueWithoutProjectInput";
import { QuestionWhereUniqueInput } from "../inputs/QuestionWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class QuestionUpdateManyWithoutProjectInput {
  @TypeGraphQL.Field(_type => [QuestionCreateWithoutProjectInput], {
    nullable: true
  })
  create?: QuestionCreateWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuestionCreateOrConnectWithoutProjectInput], {
    nullable: true
  })
  connectOrCreate?: QuestionCreateOrConnectWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuestionUpsertWithWhereUniqueWithoutProjectInput], {
    nullable: true
  })
  upsert?: QuestionUpsertWithWhereUniqueWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => QuestionCreateManyProjectInputEnvelope, {
    nullable: true
  })
  createMany?: QuestionCreateManyProjectInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [QuestionWhereUniqueInput], {
    nullable: true
  })
  connect?: QuestionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuestionWhereUniqueInput], {
    nullable: true
  })
  set?: QuestionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuestionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: QuestionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuestionWhereUniqueInput], {
    nullable: true
  })
  delete?: QuestionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuestionUpdateWithWhereUniqueWithoutProjectInput], {
    nullable: true
  })
  update?: QuestionUpdateWithWhereUniqueWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuestionUpdateManyWithWhereWithoutProjectInput], {
    nullable: true
  })
  updateMany?: QuestionUpdateManyWithWhereWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuestionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: QuestionScalarWhereInput[] | undefined;
}
