import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AdminCreateresumesInput } from "../inputs/AdminCreateresumesInput";
import { AdminCreatestackInput } from "../inputs/AdminCreatestackInput";
import { AdminCreatestacksInput } from "../inputs/AdminCreatestacksInput";
import { MessageCreateNestedManyWithoutAdminInput } from "../inputs/MessageCreateNestedManyWithoutAdminInput";
import { ProjectCreateNestedManyWithoutAdminInput } from "../inputs/ProjectCreateNestedManyWithoutAdminInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AdminCreateWithoutAboutInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  fname!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lname!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  linkedIn!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  whatsapp!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  instagram!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  github!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  heroImage!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  confirmed?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isPublished?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => AdminCreatestackInput, {
    nullable: true
  })
  stack?: AdminCreatestackInput | undefined;

  @TypeGraphQL.Field(_type => AdminCreateresumesInput, {
    nullable: true
  })
  resumes?: AdminCreateresumesInput | undefined;

  @TypeGraphQL.Field(_type => AdminCreatestacksInput, {
    nullable: true
  })
  stacks?: AdminCreatestacksInput | undefined;

  @TypeGraphQL.Field(_type => MessageCreateNestedManyWithoutAdminInput, {
    nullable: true
  })
  messages?: MessageCreateNestedManyWithoutAdminInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateNestedManyWithoutAdminInput, {
    nullable: true
  })
  projects?: ProjectCreateNestedManyWithoutAdminInput | undefined;
}
