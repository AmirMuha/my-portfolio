import { ArgsType, Field, InputType } from "type-graphql";
import {ArrayMinSize, IsNotEmpty, IsString, IsUrl, Length, Matches, ValidateNested} from "class-validator";
@InputType()
class TechCategoryCreateInput_PWNR {
  @Field(() => String)
  @IsNotEmpty()
  @Length(5,20)
  @IsString()
  name: string;
  @Field(() => [TechCreateInput_PWNR])
  @ArrayMinSize(1)
  techs: TechCreateInput_PWNR[];
}
@InputType()
class TechCreateInput_PWNR{
  @Field(() => String)
  @IsNotEmpty()
  @Length(5,20)
  @IsString()
  name: string;
}

@InputType()
class SketchCreateInput_PWNR {
  @Field(() => String)
  @IsNotEmpty()
  @Length(5,20)
  @IsString()
  title: string
  @Field(() => String)
  @IsNotEmpty()
  @Length(50,150)
  @IsString()
  summary: string
  @Field(() => String)
  @IsNotEmpty()
  @Length(300)
  @IsString()
  description: string
  @Field(() => String)
  @IsNotEmpty()
  @Matches(/\.(png|jpeg|webp|jpg|svg)$/i)
  @IsString()
  image: string
  @Field(() => String)
  @IsNotEmpty()
  @IsUrl()
  download_link: string
}

@InputType()
class QuestionCreateInput_PWNR{
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  question: string
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  answer: string
}

@InputType()
class CreateProjectInput_PWNR {
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  name: string
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  summary: string
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  type: string
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  image: string
  @Field(() => String)
  @IsNotEmpty()
  @IsUrl()
  github_url: string
  @Field(() => String)
  @IsNotEmpty()
  @IsUrl()
  app_url: string
  @Field(() => [TechCategoryCreateInput_PWNR])
  @IsNotEmpty()
  @ArrayMinSize(1)
  techCategories:TechCategoryCreateInput_PWNR[]
  @Field(() => [SketchCreateInput_PWNR])
  @ArrayMinSize(1)
  sketches: SketchCreateInput_PWNR[]
  @Field(() => [QuestionCreateInput_PWNR])
  @ArrayMinSize(1)
  questions:QuestionCreateInput_PWNR[]
}

@ArgsType()
export class CreateProjectWithNestedRelationsArgs {
  @Field(() => CreateProjectInput_PWNR)
  @ValidateNested()
  data:  CreateProjectInput_PWNR
}
