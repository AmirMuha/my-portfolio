import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateManyAdminInput } from "../inputs/ProjectCreateManyAdminInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectCreateManyAdminInputEnvelope {
  @TypeGraphQL.Field(_type => [ProjectCreateManyAdminInput], {
    nullable: false
  })
  data!: ProjectCreateManyAdminInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
