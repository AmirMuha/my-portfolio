import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AboutCreateManyAdminInputEnvelope } from "../inputs/AboutCreateManyAdminInputEnvelope";
import { AboutCreateOrConnectWithoutAdminInput } from "../inputs/AboutCreateOrConnectWithoutAdminInput";
import { AboutCreateWithoutAdminInput } from "../inputs/AboutCreateWithoutAdminInput";
import { AboutWhereUniqueInput } from "../inputs/AboutWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AboutCreateNestedManyWithoutAdminInput {
  @TypeGraphQL.Field(_type => [AboutCreateWithoutAdminInput], {
    nullable: true
  })
  create?: AboutCreateWithoutAdminInput[] | undefined;

  @TypeGraphQL.Field(_type => [AboutCreateOrConnectWithoutAdminInput], {
    nullable: true
  })
  connectOrCreate?: AboutCreateOrConnectWithoutAdminInput[] | undefined;

  @TypeGraphQL.Field(_type => AboutCreateManyAdminInputEnvelope, {
    nullable: true
  })
  createMany?: AboutCreateManyAdminInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AboutWhereUniqueInput], {
    nullable: true
  })
  connect?: AboutWhereUniqueInput[] | undefined;
}
