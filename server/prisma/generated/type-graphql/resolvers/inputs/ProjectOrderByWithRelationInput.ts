import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AdminOrderByWithRelationInput } from "../inputs/AdminOrderByWithRelationInput";
import { QuestionOrderByRelationAggregateInput } from "../inputs/QuestionOrderByRelationAggregateInput";
import { SketchOrderByRelationAggregateInput } from "../inputs/SketchOrderByRelationAggregateInput";
import { TechCategoryOrderByRelationAggregateInput } from "../inputs/TechCategoryOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  image?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  github_url?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  app_url?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TechCategoryOrderByRelationAggregateInput, {
    nullable: true
  })
  tech_categories?: TechCategoryOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => QuestionOrderByRelationAggregateInput, {
    nullable: true
  })
  questions?: QuestionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SketchOrderByRelationAggregateInput, {
    nullable: true
  })
  sketches?: SketchOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AdminOrderByWithRelationInput, {
    nullable: true
  })
  admin?: AdminOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  admin_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;
}
