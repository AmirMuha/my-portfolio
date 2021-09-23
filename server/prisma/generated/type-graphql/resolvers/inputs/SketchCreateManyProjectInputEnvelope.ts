import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SketchCreateManyProjectInput } from "../inputs/SketchCreateManyProjectInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SketchCreateManyProjectInputEnvelope {
  @TypeGraphQL.Field(_type => [SketchCreateManyProjectInput], {
    nullable: false
  })
  data!: SketchCreateManyProjectInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
