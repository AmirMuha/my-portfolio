import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TechCategoryOrderByWithRelationInput } from "../../../inputs/TechCategoryOrderByWithRelationInput";
import { TechCategoryWhereInput } from "../../../inputs/TechCategoryWhereInput";
import { TechCategoryWhereUniqueInput } from "../../../inputs/TechCategoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTechCategoryArgs {
  @TypeGraphQL.Field(_type => TechCategoryWhereInput, {
    nullable: true
  })
  where?: TechCategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TechCategoryOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TechCategoryOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TechCategoryWhereUniqueInput, {
    nullable: true
  })
  cursor?: TechCategoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
