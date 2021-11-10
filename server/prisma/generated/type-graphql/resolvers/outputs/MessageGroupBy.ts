import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCountAggregate } from "../outputs/MessageCountAggregate";
import { MessageMaxAggregate } from "../outputs/MessageMaxAggregate";
import { MessageMinAggregate } from "../outputs/MessageMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class MessageGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  subject!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  from!: string;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  files!: string[] | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  body!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  read_status!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  answer_status!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  admin_id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  answeredAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAd!: Date;

  @TypeGraphQL.Field(_type => MessageCountAggregate, {
    nullable: true
  })
  _count!: MessageCountAggregate | null;

  @TypeGraphQL.Field(_type => MessageMinAggregate, {
    nullable: true
  })
  _min!: MessageMinAggregate | null;

  @TypeGraphQL.Field(_type => MessageMaxAggregate, {
    nullable: true
  })
  _max!: MessageMaxAggregate | null;
}
