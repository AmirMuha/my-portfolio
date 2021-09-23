import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechCategoryCreateManyProjectInput } from "../inputs/TechCategoryCreateManyProjectInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TechCategoryCreateManyProjectInputEnvelope {
  @TypeGraphQL.Field(_type => [TechCategoryCreateManyProjectInput], {
    nullable: false
  })
  data!: TechCategoryCreateManyProjectInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
