import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AdminCreateManyresumesInput } from "../inputs/AdminCreateManyresumesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AdminCreateManyInput {
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

  @TypeGraphQL.Field(_type => AdminCreateManyresumesInput, {
    nullable: true
  })
  resumes?: AdminCreateManyresumesInput | undefined;
}
