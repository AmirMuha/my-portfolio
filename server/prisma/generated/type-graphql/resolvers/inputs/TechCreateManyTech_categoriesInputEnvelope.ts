import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechCreateManyTech_categoriesInput } from "../inputs/TechCreateManyTech_categoriesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TechCreateManyTech_categoriesInputEnvelope {
  @TypeGraphQL.Field(_type => [TechCreateManyTech_categoriesInput], {
    nullable: false
  })
  data!: TechCreateManyTech_categoriesInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
