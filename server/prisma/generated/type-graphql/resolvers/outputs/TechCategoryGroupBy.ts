import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechCategoryCountAggregate } from "../outputs/TechCategoryCountAggregate";
import { TechCategoryMaxAggregate } from "../outputs/TechCategoryMaxAggregate";
import { TechCategoryMinAggregate } from "../outputs/TechCategoryMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class TechCategoryGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  project_id!: string;

  @TypeGraphQL.Field(_type => TechCategoryCountAggregate, {
    nullable: true
  })
  _count!: TechCategoryCountAggregate | null;

  @TypeGraphQL.Field(_type => TechCategoryMinAggregate, {
    nullable: true
  })
  _min!: TechCategoryMinAggregate | null;

  @TypeGraphQL.Field(_type => TechCategoryMaxAggregate, {
    nullable: true
  })
  _max!: TechCategoryMaxAggregate | null;
}
