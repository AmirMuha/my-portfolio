import { ObjectType, Field } from "type-graphql";
import { BaseEntity } from "./base.entity";
import { Entity, Property, Unique } from "@mikro-orm/core";
import { IsEmail, IsUrl, Matches } from "class-validator";

@ObjectType({ implements: BaseEntity })
@Entity()
export class Admin extends BaseEntity {
  @IsEmail()
  @Field(() => String)
  @Property()
  @Unique()
  email!: string;

  @Field(() => String)
  @Property()
  password!: string;

  @Field(() => String)
  @Property()
  fname!: string;

  @Field(() => String)
  @Property()
  lname!: string;

  @IsUrl(
    {
      host_whitelist: [
        /^(((https|http):\/\/)|www\.|)(www\.|)github\.com\/([^\W|_]\w+[^\W|_])$/g,
      ],
    },
    { message: "Not a valid github profile url." }
  )
  @Field(() => String)
  @Property()
  github!: string;

  @Field(() => String)
  @Property()
  heroImage!: string;

  @IsUrl(
    {
      host_whitelist: [
        /^(((https|http):\/\/)|www\.|)(www\.|)instagram\.com\/\w+/g,
      ],
    },
    { message: "Not a valid instagram page url." }
  )
  @Field(() => String)
  @Property()
  instagram!: string;

  @IsUrl(
    {
      host_whitelist: [
        /^(((https|http):\/\/)|www\.|)(www\.|)linkedin\.com\/in\/\w+/g,
      ],
    },
    { message: "Not a valid linkedin profile url." }
  )
  @Field(() => String)
  @Property()
  linkedIn!: string;

  @Matches(/\d{10,}/g, { message: "Not a valid whatsapp number." })
  @Field(() => String)
  @Property()
  whatsapp!: string;

  @Field(() => [String])
  @Property()
  resumes: string[] = [];

  @Field(() => Boolean)
  @Property()
  confirmed: boolean = false;
}
