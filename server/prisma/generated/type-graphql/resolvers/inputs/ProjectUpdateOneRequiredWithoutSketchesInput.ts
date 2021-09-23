import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutSketchesInput } from "../inputs/ProjectCreateOrConnectWithoutSketchesInput";
import { ProjectCreateWithoutSketchesInput } from "../inputs/ProjectCreateWithoutSketchesInput";
import { ProjectUpdateWithoutSketchesInput } from "../inputs/ProjectUpdateWithoutSketchesInput";
import { ProjectUpsertWithoutSketchesInput } from "../inputs/ProjectUpsertWithoutSketchesInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectUpdateOneRequiredWithoutSketchesInput {
  @TypeGraphQL.Field(_type => ProjectCreateWithoutSketchesInput, {
    nullable: true
  })
  create?: ProjectCreateWithoutSketchesInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateOrConnectWithoutSketchesInput, {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutSketchesInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpsertWithoutSketchesInput, {
    nullable: true
  })
  upsert?: ProjectUpsertWithoutSketchesInput | undefined;

  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateWithoutSketchesInput, {
    nullable: true
  })
  update?: ProjectUpdateWithoutSketchesInput | undefined;
}
