import {Entity, PrimaryKey, Property} from "@mikro-orm/core"
import { v4 } from "uuid"
import { Field, InterfaceType, ID } from "type-graphql"

@InterfaceType()
@Entity({abstract: true})
export abstract class BaseEntity {
  @Field(() => ID)
  @PrimaryKey({onCreate: () => v4()})
  id!: string 

  @Field(() => Date)
  @Property({onCreate: () => new Date()})
  createdAt!: Date

  @Field(() => Date)
  @Property({onUpdate: () => new Date()})
  updatedAt!: Date
}