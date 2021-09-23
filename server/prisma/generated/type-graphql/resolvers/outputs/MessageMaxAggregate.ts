import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class MessageMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  subject!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  from!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  body!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  read_status!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  answer_status!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  admin_id!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAd!: Date | null;
}
