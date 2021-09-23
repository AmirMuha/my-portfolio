import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechCategoryCreateManyProjectInputEnvelope } from "../inputs/TechCategoryCreateManyProjectInputEnvelope";
import { TechCategoryCreateOrConnectWithoutProjectInput } from "../inputs/TechCategoryCreateOrConnectWithoutProjectInput";
import { TechCategoryCreateWithoutProjectInput } from "../inputs/TechCategoryCreateWithoutProjectInput";
import { TechCategoryWhereUniqueInput } from "../inputs/TechCategoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TechCategoryCreateNestedManyWithoutProjectInput {
  @TypeGraphQL.Field(_type => [TechCategoryCreateWithoutProjectInput], {
    nullable: true
  })
  create?: TechCategoryCreateWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechCategoryCreateOrConnectWithoutProjectInput], {
    nullable: true
  })
  connectOrCreate?: TechCategoryCreateOrConnectWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => TechCategoryCreateManyProjectInputEnvelope, {
    nullable: true
  })
  createMany?: TechCategoryCreateManyProjectInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TechCategoryWhereUniqueInput], {
    nullable: true
  })
  connect?: TechCategoryWhereUniqueInput[] | undefined;
}
