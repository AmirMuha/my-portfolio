import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutTech_categoriesInput } from "../inputs/ProjectCreateOrConnectWithoutTech_categoriesInput";
import { ProjectCreateWithoutTech_categoriesInput } from "../inputs/ProjectCreateWithoutTech_categoriesInput";
import { ProjectUpdateWithoutTech_categoriesInput } from "../inputs/ProjectUpdateWithoutTech_categoriesInput";
import { ProjectUpsertWithoutTech_categoriesInput } from "../inputs/ProjectUpsertWithoutTech_categoriesInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectUpdateOneRequiredWithoutTech_categoriesInput {
  @TypeGraphQL.Field(_type => ProjectCreateWithoutTech_categoriesInput, {
    nullable: true
  })
  create?: ProjectCreateWithoutTech_categoriesInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateOrConnectWithoutTech_categoriesInput, {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutTech_categoriesInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpsertWithoutTech_categoriesInput, {
    nullable: true
  })
  upsert?: ProjectUpsertWithoutTech_categoriesInput | undefined;

  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateWithoutTech_categoriesInput, {
    nullable: true
  })
  update?: ProjectUpdateWithoutTech_categoriesInput | undefined;
}
