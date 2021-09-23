import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutTech_categoriesInput } from "../inputs/ProjectCreateOrConnectWithoutTech_categoriesInput";
import { ProjectCreateWithoutTech_categoriesInput } from "../inputs/ProjectCreateWithoutTech_categoriesInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectCreateNestedOneWithoutTech_categoriesInput {
  @TypeGraphQL.Field(_type => ProjectCreateWithoutTech_categoriesInput, {
    nullable: true
  })
  create?: ProjectCreateWithoutTech_categoriesInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateOrConnectWithoutTech_categoriesInput, {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutTech_categoriesInput | undefined;

  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput | undefined;
}
