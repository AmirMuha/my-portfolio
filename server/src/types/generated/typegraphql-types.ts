import * as TypeGraphQL from 'type-graphql';
export { TypeGraphQL };
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type FixDecorator<T> = T;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

@TypeGraphQL.ObjectType()
export class About {
  __typename?: 'About';

  @TypeGraphQL.Field(type => Admin)
  admin!: FixDecorator<Admin>;

  @TypeGraphQL.Field(type => String)
  body!: Scalars['String'];

  @TypeGraphQL.Field(type => String)
  id!: Scalars['String'];

  @TypeGraphQL.Field(type => String)
  title!: Scalars['String'];
};

@TypeGraphQL.ObjectType()
export class Admin {
  __typename?: 'Admin';

  @TypeGraphQL.Field(type => [About], { nullable: 'items' })
  about!: Array<Maybe<About>>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  apikey!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => Boolean)
  confirmed!: Scalars['Boolean'];

  @TypeGraphQL.Field(type => Date)
  createdAt!: Scalars['Date'];

  @TypeGraphQL.Field(type => String)
  email!: Scalars['String'];

  @TypeGraphQL.Field(type => String)
  fname!: Scalars['String'];

  @TypeGraphQL.Field(type => String)
  github!: Scalars['String'];

  @TypeGraphQL.Field(type => String)
  heroImage!: Scalars['String'];

  @TypeGraphQL.Field(type => String)
  id!: Scalars['String'];

  @TypeGraphQL.Field(type => String)
  instagram!: Scalars['String'];

  @TypeGraphQL.Field(type => String)
  linkedIn!: Scalars['String'];

  @TypeGraphQL.Field(type => String)
  lname!: Scalars['String'];

  @TypeGraphQL.Field(type => [Message], { nullable: 'items' })
  messages!: Array<Maybe<Message>>;

  @TypeGraphQL.Field(type => String)
  password!: Scalars['String'];

  @TypeGraphQL.Field(type => [Project], { nullable: 'items' })
  projects!: Array<Maybe<Project>>;

  @TypeGraphQL.Field(type => [String], { nullable: 'items' })
  resumes!: Array<Maybe<Scalars['String']>>;

  @TypeGraphQL.Field(type => String)
  skype!: Scalars['String'];

  @TypeGraphQL.Field(type => [Stack], { nullable: 'items' })
  stack!: Array<Maybe<Stack>>;

  @TypeGraphQL.Field(type => Date)
  updatedAt!: Scalars['Date'];

  @TypeGraphQL.Field(type => String)
  whatsapp!: Scalars['String'];
};

@TypeGraphQL.InputType()
export class CreateAdminInput {

  @TypeGraphQL.Field(type => String)
  fname!: Scalars['String'];

  @TypeGraphQL.Field(type => String)
  lname!: Scalars['String'];
};


@TypeGraphQL.ObjectType()
export class Message {
  __typename?: 'Message';

  @TypeGraphQL.Field(type => Admin)
  admin!: FixDecorator<Admin>;

  @TypeGraphQL.Field(type => Boolean)
  answer_status!: Scalars['Boolean'];

  @TypeGraphQL.Field(type => Date, { nullable: true })
  answeredAt!: Maybe<Scalars['Date']>;

  @TypeGraphQL.Field(type => String)
  body!: Scalars['String'];

  @TypeGraphQL.Field(type => Date)
  createdAt!: Scalars['Date'];

  @TypeGraphQL.Field(type => [String], { nullable: 'items' })
  files!: Array<Maybe<Scalars['String']>>;

  @TypeGraphQL.Field(type => String)
  from!: Scalars['String'];

  @TypeGraphQL.Field(type => String)
  id!: Scalars['String'];

  @TypeGraphQL.Field(type => Boolean)
  read_status!: Scalars['Boolean'];

  @TypeGraphQL.Field(type => String)
  subject!: Scalars['String'];
};

@TypeGraphQL.ObjectType()
export class Project {
  __typename?: 'Project';

  @TypeGraphQL.Field(type => Admin)
  admin!: FixDecorator<Admin>;

  @TypeGraphQL.Field(type => String)
  app_url!: Scalars['String'];

  @TypeGraphQL.Field(type => String)
  body!: Scalars['String'];

  @TypeGraphQL.Field(type => Date)
  createdAt!: Scalars['Date'];

  @TypeGraphQL.Field(type => String)
  github_url!: Scalars['String'];

  @TypeGraphQL.Field(type => String)
  id!: Scalars['String'];

  @TypeGraphQL.Field(type => String)
  image!: Scalars['String'];

  @TypeGraphQL.Field(type => String)
  name!: Scalars['String'];

  @TypeGraphQL.Field(type => [Question], { nullable: 'items' })
  questions!: Array<Maybe<Question>>;

  @TypeGraphQL.Field(type => [Sketch], { nullable: 'items' })
  sketches!: Array<Maybe<Sketch>>;

  @TypeGraphQL.Field(type => String)
  summary!: Scalars['String'];

  @TypeGraphQL.Field(type => [String], { nullable: 'items' })
  tech_categories!: Array<Maybe<Scalars['String']>>;

  @TypeGraphQL.Field(type => String)
  type!: Scalars['String'];

  @TypeGraphQL.Field(type => Date)
  updatedAt!: Scalars['Date'];
};

export type Query = {
  __typename?: 'Query';
  abouts?: Maybe<Array<Maybe<About>>>;
  messages?: Maybe<Array<Maybe<Message>>>;
  projects?: Maybe<Array<Maybe<Project>>>;
  sketches?: Maybe<Array<Maybe<Sketch>>>;
  stack?: Maybe<Array<Maybe<Stack>>>;
  tech_categories?: Maybe<Array<Maybe<TechCategory>>>;
  techs?: Maybe<Array<Maybe<Tech>>>;
};

@TypeGraphQL.ObjectType()
export class Question {
  __typename?: 'Question';

  @TypeGraphQL.Field(type => String)
  answer!: Scalars['String'];

  @TypeGraphQL.Field(type => String)
  id!: Scalars['String'];

  @TypeGraphQL.Field(type => Project)
  project!: FixDecorator<Project>;

  @TypeGraphQL.Field(type => String)
  question!: Scalars['String'];
};

@TypeGraphQL.ObjectType()
export class Sketch {
  __typename?: 'Sketch';

  @TypeGraphQL.Field(type => String)
  description!: Scalars['String'];

  @TypeGraphQL.Field(type => String)
  downloadables!: Scalars['String'];

  @TypeGraphQL.Field(type => String)
  id!: Scalars['String'];

  @TypeGraphQL.Field(type => String)
  image!: Scalars['String'];

  @TypeGraphQL.Field(type => Project)
  project!: FixDecorator<Project>;

  @TypeGraphQL.Field(type => String)
  summary!: Scalars['String'];

  @TypeGraphQL.Field(type => String)
  title!: Scalars['String'];
};

@TypeGraphQL.ObjectType()
export class Stack {
  __typename?: 'Stack';

  @TypeGraphQL.Field(type => Admin)
  admin!: FixDecorator<Admin>;

  @TypeGraphQL.Field(type => String)
  id!: Scalars['String'];

  @TypeGraphQL.Field(type => String)
  image!: Scalars['String'];

  @TypeGraphQL.Field(type => String)
  title!: Scalars['String'];
};

@TypeGraphQL.ObjectType()
export class Tech {
  __typename?: 'Tech';

  @TypeGraphQL.Field(type => String)
  id!: Scalars['String'];

  @TypeGraphQL.Field(type => String)
  name!: Scalars['String'];

  @TypeGraphQL.Field(type => TechCategory, { nullable: true })
  tech_categories!: Maybe<TechCategory>;
};

@TypeGraphQL.ObjectType()
export class TechCategory {
  __typename?: 'TechCategory';

  @TypeGraphQL.Field(type => String)
  id!: Scalars['String'];

  @TypeGraphQL.Field(type => String)
  name!: Scalars['String'];

  @TypeGraphQL.Field(type => Project)
  project!: FixDecorator<Project>;

  @TypeGraphQL.Field(type => [Tech], { nullable: 'items' })
  techs!: Array<Maybe<Tech>>;
};
