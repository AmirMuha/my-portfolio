import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class QuestionScalarWhereInput {
  @TypeGraphQL.Field(_type => [QuestionScalarWhereInput], {
    nullable: true
  })
  AND?: QuestionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuestionScalarWhereInput], {
    nullable: true
  })
  OR?: QuestionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuestionScalarWhereInput], {
    nullable: true
  })
  NOT?: QuestionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  question?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  answer?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  project_id?: StringFilter | undefined;
}
