import { ObjectType, Field } from "type-graphql";
import {} from "class-validator";

@ObjectType()
export class User {
  @Field()
  email: string;
  @Field(() => String, { nullable: true })
  name?: string | null;
}
