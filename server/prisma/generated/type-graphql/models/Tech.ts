import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { TechCategory } from "../models/TechCategory";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Tech {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  tech_categories?: TechCategory;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tech_category_id!: string;
}
