import {ArgsType, Field, InputType} from "type-graphql"
@InputType()
class TechCategoryCreateInput_PWNR {
  @Field(() => String)
  name: string;
  @Field(() => [TechCreateInput_PWNR])
  techs: TechCreateInput_PWNR[];
}
@InputType()
class TechCreateInput_PWNR{
  @Field(() => String)
  name: string;
}

@InputType()
class SketchCreateInput_PWNR {
  @Field(() => String)
  title: string
  @Field(() => String)
  summary: string
  @Field(() => String)
  description: string
  @Field(() => String)
  image: string
  @Field(() => String)
  download_link: string
}

@InputType()
class QuestionCreateInput_PWNR{
  @Field(() => String)
  question: string
  @Field(() => String)
  answer: string
}

@InputType()
class CreateProjectInput_PWNR{
  @Field(() => String)
  name: string
  @Field(() => String)
  summary: string
  @Field(() => String)
  type: string
  @Field(() => String)
  image: string
  @Field(() => String)
  github_url: string
  @Field(() => String)
  app_url: string
  @Field(() => String)
  adminId: string
  @Field(() => [TechCategoryCreateInput_PWNR])
  techCategories:TechCategoryCreateInput_PWNR[]
  @Field(() => [SketchCreateInput_PWNR])
  sketches: SketchCreateInput_PWNR[]
  @Field(() => [QuestionCreateInput_PWNR])
  questions:QuestionCreateInput_PWNR[]
}

@ArgsType()
export class CreateProjectWithNestedRelationsArgs {
  @Field(() => CreateProjectInput_PWNR)
  data:  CreateProjectInput_PWNR
}
