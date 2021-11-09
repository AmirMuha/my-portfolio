import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type About = {
  __typename?: 'About';
  admin: Admin;
  admin_id: Scalars['String'];
  body: Scalars['String'];
  id: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type AboutCreateInput = {
  admin: AdminCreateNestedOneWithoutAboutInput;
  body: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AboutCreateManyAdminInput = {
  body: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AboutCreateManyAdminInputEnvelope = {
  data: Array<AboutCreateManyAdminInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type AboutCreateNestedManyWithoutAdminInput = {
  connect?: Maybe<Array<AboutWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<AboutCreateOrConnectWithoutAdminInput>>;
  create?: Maybe<Array<AboutCreateWithoutAdminInput>>;
  createMany?: Maybe<AboutCreateManyAdminInputEnvelope>;
};

export type AboutCreateOrConnectWithoutAdminInput = {
  create: AboutCreateWithoutAdminInput;
  where: AboutWhereUniqueInput;
};

export type AboutCreateWithoutAdminInput = {
  body: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AboutListRelationFilter = {
  every?: Maybe<AboutWhereInput>;
  none?: Maybe<AboutWhereInput>;
  some?: Maybe<AboutWhereInput>;
};

export type AboutOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type AboutOrderByWithRelationInput = {
  admin?: Maybe<AdminOrderByWithRelationInput>;
  admin_id?: Maybe<SortOrder>;
  body?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export enum AboutScalarFieldEnum {
  AdminId = 'admin_id',
  Body = 'body',
  Id = 'id',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type AboutScalarWhereInput = {
  AND?: Maybe<Array<AboutScalarWhereInput>>;
  NOT?: Maybe<Array<AboutScalarWhereInput>>;
  OR?: Maybe<Array<AboutScalarWhereInput>>;
  admin_id?: Maybe<StringFilter>;
  body?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type AboutUpdateInput = {
  admin?: Maybe<AdminUpdateOneRequiredWithoutAboutInput>;
  body?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type AboutUpdateManyMutationInput = {
  body?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type AboutUpdateManyWithWhereWithoutAdminInput = {
  data: AboutUpdateManyMutationInput;
  where: AboutScalarWhereInput;
};

export type AboutUpdateManyWithoutAdminInput = {
  connect?: Maybe<Array<AboutWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<AboutCreateOrConnectWithoutAdminInput>>;
  create?: Maybe<Array<AboutCreateWithoutAdminInput>>;
  createMany?: Maybe<AboutCreateManyAdminInputEnvelope>;
  delete?: Maybe<Array<AboutWhereUniqueInput>>;
  deleteMany?: Maybe<Array<AboutScalarWhereInput>>;
  disconnect?: Maybe<Array<AboutWhereUniqueInput>>;
  set?: Maybe<Array<AboutWhereUniqueInput>>;
  update?: Maybe<Array<AboutUpdateWithWhereUniqueWithoutAdminInput>>;
  updateMany?: Maybe<Array<AboutUpdateManyWithWhereWithoutAdminInput>>;
  upsert?: Maybe<Array<AboutUpsertWithWhereUniqueWithoutAdminInput>>;
};

export type AboutUpdateWithWhereUniqueWithoutAdminInput = {
  data: AboutUpdateWithoutAdminInput;
  where: AboutWhereUniqueInput;
};

export type AboutUpdateWithoutAdminInput = {
  body?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type AboutUpsertWithWhereUniqueWithoutAdminInput = {
  create: AboutCreateWithoutAdminInput;
  update: AboutUpdateWithoutAdminInput;
  where: AboutWhereUniqueInput;
};

export type AboutWhereInput = {
  AND?: Maybe<Array<AboutWhereInput>>;
  NOT?: Maybe<Array<AboutWhereInput>>;
  OR?: Maybe<Array<AboutWhereInput>>;
  admin?: Maybe<AdminRelationFilter>;
  admin_id?: Maybe<StringFilter>;
  body?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type AboutWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Admin = {
  __typename?: 'Admin';
  _count?: Maybe<AdminCount>;
  confirmed: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  fname: Scalars['String'];
  github: Scalars['String'];
  heroImage: Scalars['String'];
  id: Scalars['String'];
  instagram: Scalars['String'];
  linkedIn: Scalars['String'];
  lname: Scalars['String'];
  resumes: Array<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  whatsapp: Scalars['String'];
};

export type AdminCount = {
  __typename?: 'AdminCount';
  about: Scalars['Int'];
  messages: Scalars['Int'];
  projects: Scalars['Int'];
  stack: Scalars['Int'];
};

export type AdminCreateInput = {
  about?: Maybe<AboutCreateNestedManyWithoutAdminInput>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  fname: Scalars['String'];
  github: Scalars['String'];
  heroImage: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  instagram: Scalars['String'];
  linkedIn: Scalars['String'];
  lname: Scalars['String'];
  messages?: Maybe<MessageCreateNestedManyWithoutAdminInput>;
  password: Scalars['String'];
  projects?: Maybe<ProjectCreateNestedManyWithoutAdminInput>;
  resumes?: Maybe<AdminCreateresumesInput>;
  stack?: Maybe<StackCreateNestedManyWithoutAdminInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  whatsapp: Scalars['String'];
};

export type AdminCreateNestedOneWithoutAboutInput = {
  connect?: Maybe<AdminWhereUniqueInput>;
  connectOrCreate?: Maybe<AdminCreateOrConnectWithoutAboutInput>;
  create?: Maybe<AdminCreateWithoutAboutInput>;
};

export type AdminCreateNestedOneWithoutMessagesInput = {
  connect?: Maybe<AdminWhereUniqueInput>;
  connectOrCreate?: Maybe<AdminCreateOrConnectWithoutMessagesInput>;
  create?: Maybe<AdminCreateWithoutMessagesInput>;
};

export type AdminCreateNestedOneWithoutProjectsInput = {
  connect?: Maybe<AdminWhereUniqueInput>;
  connectOrCreate?: Maybe<AdminCreateOrConnectWithoutProjectsInput>;
  create?: Maybe<AdminCreateWithoutProjectsInput>;
};

export type AdminCreateNestedOneWithoutStackInput = {
  connect?: Maybe<AdminWhereUniqueInput>;
  connectOrCreate?: Maybe<AdminCreateOrConnectWithoutStackInput>;
  create?: Maybe<AdminCreateWithoutStackInput>;
};

export type AdminCreateOrConnectWithoutAboutInput = {
  create: AdminCreateWithoutAboutInput;
  where: AdminWhereUniqueInput;
};

export type AdminCreateOrConnectWithoutMessagesInput = {
  create: AdminCreateWithoutMessagesInput;
  where: AdminWhereUniqueInput;
};

export type AdminCreateOrConnectWithoutProjectsInput = {
  create: AdminCreateWithoutProjectsInput;
  where: AdminWhereUniqueInput;
};

export type AdminCreateOrConnectWithoutStackInput = {
  create: AdminCreateWithoutStackInput;
  where: AdminWhereUniqueInput;
};

export type AdminCreateWithoutAboutInput = {
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  fname: Scalars['String'];
  github: Scalars['String'];
  heroImage: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  instagram: Scalars['String'];
  linkedIn: Scalars['String'];
  lname: Scalars['String'];
  messages?: Maybe<MessageCreateNestedManyWithoutAdminInput>;
  password: Scalars['String'];
  projects?: Maybe<ProjectCreateNestedManyWithoutAdminInput>;
  resumes?: Maybe<AdminCreateresumesInput>;
  stack?: Maybe<StackCreateNestedManyWithoutAdminInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  whatsapp: Scalars['String'];
};

export type AdminCreateWithoutMessagesInput = {
  about?: Maybe<AboutCreateNestedManyWithoutAdminInput>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  fname: Scalars['String'];
  github: Scalars['String'];
  heroImage: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  instagram: Scalars['String'];
  linkedIn: Scalars['String'];
  lname: Scalars['String'];
  password: Scalars['String'];
  projects?: Maybe<ProjectCreateNestedManyWithoutAdminInput>;
  resumes?: Maybe<AdminCreateresumesInput>;
  stack?: Maybe<StackCreateNestedManyWithoutAdminInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  whatsapp: Scalars['String'];
};

export type AdminCreateWithoutProjectsInput = {
  about?: Maybe<AboutCreateNestedManyWithoutAdminInput>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  fname: Scalars['String'];
  github: Scalars['String'];
  heroImage: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  instagram: Scalars['String'];
  linkedIn: Scalars['String'];
  lname: Scalars['String'];
  messages?: Maybe<MessageCreateNestedManyWithoutAdminInput>;
  password: Scalars['String'];
  resumes?: Maybe<AdminCreateresumesInput>;
  stack?: Maybe<StackCreateNestedManyWithoutAdminInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  whatsapp: Scalars['String'];
};

export type AdminCreateWithoutStackInput = {
  about?: Maybe<AboutCreateNestedManyWithoutAdminInput>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  fname: Scalars['String'];
  github: Scalars['String'];
  heroImage: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  instagram: Scalars['String'];
  linkedIn: Scalars['String'];
  lname: Scalars['String'];
  messages?: Maybe<MessageCreateNestedManyWithoutAdminInput>;
  password: Scalars['String'];
  projects?: Maybe<ProjectCreateNestedManyWithoutAdminInput>;
  resumes?: Maybe<AdminCreateresumesInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  whatsapp: Scalars['String'];
};

export type AdminCreateresumesInput = {
  set: Array<Scalars['String']>;
};

export type AdminOrderByWithRelationInput = {
  about?: Maybe<AboutOrderByRelationAggregateInput>;
  confirmed?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  fname?: Maybe<SortOrder>;
  github?: Maybe<SortOrder>;
  heroImage?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  instagram?: Maybe<SortOrder>;
  linkedIn?: Maybe<SortOrder>;
  lname?: Maybe<SortOrder>;
  messages?: Maybe<MessageOrderByRelationAggregateInput>;
  password?: Maybe<SortOrder>;
  projects?: Maybe<ProjectOrderByRelationAggregateInput>;
  resumes?: Maybe<SortOrder>;
  stack?: Maybe<StackOrderByRelationAggregateInput>;
  updatedAt?: Maybe<SortOrder>;
  whatsapp?: Maybe<SortOrder>;
};

export type AdminRelationFilter = {
  is?: Maybe<AdminWhereInput>;
  isNot?: Maybe<AdminWhereInput>;
};

export type AdminUpdateInput = {
  about?: Maybe<AboutUpdateManyWithoutAdminInput>;
  confirmed?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  fname?: Maybe<StringFieldUpdateOperationsInput>;
  github?: Maybe<StringFieldUpdateOperationsInput>;
  heroImage?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  instagram?: Maybe<StringFieldUpdateOperationsInput>;
  linkedIn?: Maybe<StringFieldUpdateOperationsInput>;
  lname?: Maybe<StringFieldUpdateOperationsInput>;
  messages?: Maybe<MessageUpdateManyWithoutAdminInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  projects?: Maybe<ProjectUpdateManyWithoutAdminInput>;
  resumes?: Maybe<AdminUpdateresumesInput>;
  stack?: Maybe<StackUpdateManyWithoutAdminInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  whatsapp?: Maybe<StringFieldUpdateOperationsInput>;
};

export type AdminUpdateOneRequiredWithoutAboutInput = {
  connect?: Maybe<AdminWhereUniqueInput>;
  connectOrCreate?: Maybe<AdminCreateOrConnectWithoutAboutInput>;
  create?: Maybe<AdminCreateWithoutAboutInput>;
  update?: Maybe<AdminUpdateWithoutAboutInput>;
  upsert?: Maybe<AdminUpsertWithoutAboutInput>;
};

export type AdminUpdateOneRequiredWithoutMessagesInput = {
  connect?: Maybe<AdminWhereUniqueInput>;
  connectOrCreate?: Maybe<AdminCreateOrConnectWithoutMessagesInput>;
  create?: Maybe<AdminCreateWithoutMessagesInput>;
  update?: Maybe<AdminUpdateWithoutMessagesInput>;
  upsert?: Maybe<AdminUpsertWithoutMessagesInput>;
};

export type AdminUpdateOneRequiredWithoutProjectsInput = {
  connect?: Maybe<AdminWhereUniqueInput>;
  connectOrCreate?: Maybe<AdminCreateOrConnectWithoutProjectsInput>;
  create?: Maybe<AdminCreateWithoutProjectsInput>;
  update?: Maybe<AdminUpdateWithoutProjectsInput>;
  upsert?: Maybe<AdminUpsertWithoutProjectsInput>;
};

export type AdminUpdateOneRequiredWithoutStackInput = {
  connect?: Maybe<AdminWhereUniqueInput>;
  connectOrCreate?: Maybe<AdminCreateOrConnectWithoutStackInput>;
  create?: Maybe<AdminCreateWithoutStackInput>;
  update?: Maybe<AdminUpdateWithoutStackInput>;
  upsert?: Maybe<AdminUpsertWithoutStackInput>;
};

export type AdminUpdateWithoutAboutInput = {
  confirmed?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  fname?: Maybe<StringFieldUpdateOperationsInput>;
  github?: Maybe<StringFieldUpdateOperationsInput>;
  heroImage?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  instagram?: Maybe<StringFieldUpdateOperationsInput>;
  linkedIn?: Maybe<StringFieldUpdateOperationsInput>;
  lname?: Maybe<StringFieldUpdateOperationsInput>;
  messages?: Maybe<MessageUpdateManyWithoutAdminInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  projects?: Maybe<ProjectUpdateManyWithoutAdminInput>;
  resumes?: Maybe<AdminUpdateresumesInput>;
  stack?: Maybe<StackUpdateManyWithoutAdminInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  whatsapp?: Maybe<StringFieldUpdateOperationsInput>;
};

export type AdminUpdateWithoutMessagesInput = {
  about?: Maybe<AboutUpdateManyWithoutAdminInput>;
  confirmed?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  fname?: Maybe<StringFieldUpdateOperationsInput>;
  github?: Maybe<StringFieldUpdateOperationsInput>;
  heroImage?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  instagram?: Maybe<StringFieldUpdateOperationsInput>;
  linkedIn?: Maybe<StringFieldUpdateOperationsInput>;
  lname?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  projects?: Maybe<ProjectUpdateManyWithoutAdminInput>;
  resumes?: Maybe<AdminUpdateresumesInput>;
  stack?: Maybe<StackUpdateManyWithoutAdminInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  whatsapp?: Maybe<StringFieldUpdateOperationsInput>;
};

export type AdminUpdateWithoutProjectsInput = {
  about?: Maybe<AboutUpdateManyWithoutAdminInput>;
  confirmed?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  fname?: Maybe<StringFieldUpdateOperationsInput>;
  github?: Maybe<StringFieldUpdateOperationsInput>;
  heroImage?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  instagram?: Maybe<StringFieldUpdateOperationsInput>;
  linkedIn?: Maybe<StringFieldUpdateOperationsInput>;
  lname?: Maybe<StringFieldUpdateOperationsInput>;
  messages?: Maybe<MessageUpdateManyWithoutAdminInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  resumes?: Maybe<AdminUpdateresumesInput>;
  stack?: Maybe<StackUpdateManyWithoutAdminInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  whatsapp?: Maybe<StringFieldUpdateOperationsInput>;
};

export type AdminUpdateWithoutStackInput = {
  about?: Maybe<AboutUpdateManyWithoutAdminInput>;
  confirmed?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  fname?: Maybe<StringFieldUpdateOperationsInput>;
  github?: Maybe<StringFieldUpdateOperationsInput>;
  heroImage?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  instagram?: Maybe<StringFieldUpdateOperationsInput>;
  linkedIn?: Maybe<StringFieldUpdateOperationsInput>;
  lname?: Maybe<StringFieldUpdateOperationsInput>;
  messages?: Maybe<MessageUpdateManyWithoutAdminInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  projects?: Maybe<ProjectUpdateManyWithoutAdminInput>;
  resumes?: Maybe<AdminUpdateresumesInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  whatsapp?: Maybe<StringFieldUpdateOperationsInput>;
};

export type AdminUpdateresumesInput = {
  push?: Maybe<Array<Scalars['String']>>;
  set?: Maybe<Array<Scalars['String']>>;
};

export type AdminUpsertWithoutAboutInput = {
  create: AdminCreateWithoutAboutInput;
  update: AdminUpdateWithoutAboutInput;
};

export type AdminUpsertWithoutMessagesInput = {
  create: AdminCreateWithoutMessagesInput;
  update: AdminUpdateWithoutMessagesInput;
};

export type AdminUpsertWithoutProjectsInput = {
  create: AdminCreateWithoutProjectsInput;
  update: AdminUpdateWithoutProjectsInput;
};

export type AdminUpsertWithoutStackInput = {
  create: AdminCreateWithoutStackInput;
  update: AdminUpdateWithoutStackInput;
};

export type AdminWhereInput = {
  AND?: Maybe<Array<AdminWhereInput>>;
  NOT?: Maybe<Array<AdminWhereInput>>;
  OR?: Maybe<Array<AdminWhereInput>>;
  about?: Maybe<AboutListRelationFilter>;
  confirmed?: Maybe<BoolFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringFilter>;
  fname?: Maybe<StringFilter>;
  github?: Maybe<StringFilter>;
  heroImage?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  instagram?: Maybe<StringFilter>;
  linkedIn?: Maybe<StringFilter>;
  lname?: Maybe<StringFilter>;
  messages?: Maybe<MessageListRelationFilter>;
  password?: Maybe<StringFilter>;
  projects?: Maybe<ProjectListRelationFilter>;
  resumes?: Maybe<StringNullableListFilter>;
  stack?: Maybe<StackListRelationFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  whatsapp?: Maybe<StringFilter>;
};

export type AdminWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type BoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type CreateProjectInput_Pwnr = {
  app_url: Scalars['String'];
  github_url: Scalars['String'];
  image: Scalars['String'];
  name: Scalars['String'];
  questions: Array<QuestionCreateInput_Pwnr>;
  sketches: Array<SketchCreateInput_Pwnr>;
  summary: Scalars['String'];
  techCategories: Array<TechCategoryCreateInput_Pwnr>;
  type: Scalars['String'];
};


export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type LoginInputType = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginReturnType = {
  __typename?: 'LoginReturnType';
  token?: Maybe<Scalars['String']>;
};

export type Message = {
  __typename?: 'Message';
  admin: Admin;
  admin_id: Scalars['String'];
  answer_status: Scalars['Boolean'];
  answeredAt: Scalars['DateTime'];
  body: Scalars['String'];
  createdAd: Scalars['DateTime'];
  from: Scalars['String'];
  id: Scalars['String'];
  read_status: Scalars['Boolean'];
  subject: Scalars['String'];
};

export type MessageCreateInput = {
  admin: AdminCreateNestedOneWithoutMessagesInput;
  answer_status?: Maybe<Scalars['Boolean']>;
  answeredAt?: Maybe<Scalars['DateTime']>;
  body: Scalars['String'];
  createdAd?: Maybe<Scalars['DateTime']>;
  from: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  read_status?: Maybe<Scalars['Boolean']>;
  subject: Scalars['String'];
};

export type MessageCreateManyAdminInput = {
  answer_status?: Maybe<Scalars['Boolean']>;
  answeredAt?: Maybe<Scalars['DateTime']>;
  body: Scalars['String'];
  createdAd?: Maybe<Scalars['DateTime']>;
  from: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  read_status?: Maybe<Scalars['Boolean']>;
  subject: Scalars['String'];
};

export type MessageCreateManyAdminInputEnvelope = {
  data: Array<MessageCreateManyAdminInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type MessageCreateNestedManyWithoutAdminInput = {
  connect?: Maybe<Array<MessageWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<MessageCreateOrConnectWithoutAdminInput>>;
  create?: Maybe<Array<MessageCreateWithoutAdminInput>>;
  createMany?: Maybe<MessageCreateManyAdminInputEnvelope>;
};

export type MessageCreateOrConnectWithoutAdminInput = {
  create: MessageCreateWithoutAdminInput;
  where: MessageWhereUniqueInput;
};

export type MessageCreateWithoutAdminInput = {
  answer_status?: Maybe<Scalars['Boolean']>;
  answeredAt?: Maybe<Scalars['DateTime']>;
  body: Scalars['String'];
  createdAd?: Maybe<Scalars['DateTime']>;
  from: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  read_status?: Maybe<Scalars['Boolean']>;
  subject: Scalars['String'];
};

export type MessageListRelationFilter = {
  every?: Maybe<MessageWhereInput>;
  none?: Maybe<MessageWhereInput>;
  some?: Maybe<MessageWhereInput>;
};

export type MessageOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type MessageOrderByWithRelationInput = {
  admin?: Maybe<AdminOrderByWithRelationInput>;
  admin_id?: Maybe<SortOrder>;
  answer_status?: Maybe<SortOrder>;
  answeredAt?: Maybe<SortOrder>;
  body?: Maybe<SortOrder>;
  createdAd?: Maybe<SortOrder>;
  from?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  read_status?: Maybe<SortOrder>;
  subject?: Maybe<SortOrder>;
};

export enum MessageScalarFieldEnum {
  AdminId = 'admin_id',
  AnswerStatus = 'answer_status',
  AnsweredAt = 'answeredAt',
  Body = 'body',
  CreatedAd = 'createdAd',
  From = 'from',
  Id = 'id',
  ReadStatus = 'read_status',
  Subject = 'subject'
}

export type MessageScalarWhereInput = {
  AND?: Maybe<Array<MessageScalarWhereInput>>;
  NOT?: Maybe<Array<MessageScalarWhereInput>>;
  OR?: Maybe<Array<MessageScalarWhereInput>>;
  admin_id?: Maybe<StringFilter>;
  answer_status?: Maybe<BoolFilter>;
  answeredAt?: Maybe<DateTimeFilter>;
  body?: Maybe<StringFilter>;
  createdAd?: Maybe<DateTimeFilter>;
  from?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  read_status?: Maybe<BoolFilter>;
  subject?: Maybe<StringFilter>;
};

export type MessageUpdateInput = {
  admin?: Maybe<AdminUpdateOneRequiredWithoutMessagesInput>;
  answer_status?: Maybe<BoolFieldUpdateOperationsInput>;
  answeredAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  body?: Maybe<StringFieldUpdateOperationsInput>;
  createdAd?: Maybe<DateTimeFieldUpdateOperationsInput>;
  from?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  read_status?: Maybe<BoolFieldUpdateOperationsInput>;
  subject?: Maybe<StringFieldUpdateOperationsInput>;
};

export type MessageUpdateManyMutationInput = {
  answer_status?: Maybe<BoolFieldUpdateOperationsInput>;
  answeredAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  body?: Maybe<StringFieldUpdateOperationsInput>;
  createdAd?: Maybe<DateTimeFieldUpdateOperationsInput>;
  from?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  read_status?: Maybe<BoolFieldUpdateOperationsInput>;
  subject?: Maybe<StringFieldUpdateOperationsInput>;
};

export type MessageUpdateManyWithWhereWithoutAdminInput = {
  data: MessageUpdateManyMutationInput;
  where: MessageScalarWhereInput;
};

export type MessageUpdateManyWithoutAdminInput = {
  connect?: Maybe<Array<MessageWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<MessageCreateOrConnectWithoutAdminInput>>;
  create?: Maybe<Array<MessageCreateWithoutAdminInput>>;
  createMany?: Maybe<MessageCreateManyAdminInputEnvelope>;
  delete?: Maybe<Array<MessageWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MessageScalarWhereInput>>;
  disconnect?: Maybe<Array<MessageWhereUniqueInput>>;
  set?: Maybe<Array<MessageWhereUniqueInput>>;
  update?: Maybe<Array<MessageUpdateWithWhereUniqueWithoutAdminInput>>;
  updateMany?: Maybe<Array<MessageUpdateManyWithWhereWithoutAdminInput>>;
  upsert?: Maybe<Array<MessageUpsertWithWhereUniqueWithoutAdminInput>>;
};

export type MessageUpdateWithWhereUniqueWithoutAdminInput = {
  data: MessageUpdateWithoutAdminInput;
  where: MessageWhereUniqueInput;
};

export type MessageUpdateWithoutAdminInput = {
  answer_status?: Maybe<BoolFieldUpdateOperationsInput>;
  answeredAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  body?: Maybe<StringFieldUpdateOperationsInput>;
  createdAd?: Maybe<DateTimeFieldUpdateOperationsInput>;
  from?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  read_status?: Maybe<BoolFieldUpdateOperationsInput>;
  subject?: Maybe<StringFieldUpdateOperationsInput>;
};

export type MessageUpsertWithWhereUniqueWithoutAdminInput = {
  create: MessageCreateWithoutAdminInput;
  update: MessageUpdateWithoutAdminInput;
  where: MessageWhereUniqueInput;
};

export type MessageWhereInput = {
  AND?: Maybe<Array<MessageWhereInput>>;
  NOT?: Maybe<Array<MessageWhereInput>>;
  OR?: Maybe<Array<MessageWhereInput>>;
  admin?: Maybe<AdminRelationFilter>;
  admin_id?: Maybe<StringFilter>;
  answer_status?: Maybe<BoolFilter>;
  answeredAt?: Maybe<DateTimeFilter>;
  body?: Maybe<StringFilter>;
  createdAd?: Maybe<DateTimeFilter>;
  from?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  read_status?: Maybe<BoolFilter>;
  subject?: Maybe<StringFilter>;
};

export type MessageWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  confirmAdminDelete: Scalars['Boolean'];
  confirmEmail?: Maybe<Scalars['Boolean']>;
  confirmTokenOrCode: Scalars['Boolean'];
  createAbout: About;
  createAdmin?: Maybe<Admin>;
  createManyQuestion: AffectedRowsOutput;
  createManySketch: AffectedRowsOutput;
  createManyTech: AffectedRowsOutput;
  createManyTechCategory: AffectedRowsOutput;
  createMessage: Message;
  createProject: Project;
  createProjectWithNestedRelations: Scalars['Boolean'];
  createQuestion: Question;
  createSketch: Sketch;
  createStack: Stack;
  createTech: Tech;
  createTechCategory: TechCategory;
  deleteAbout?: Maybe<About>;
  deleteAdmin: Scalars['Boolean'];
  deleteFile: Scalars['Boolean'];
  deleteManyAbout: AffectedRowsOutput;
  deleteManyMessage: AffectedRowsOutput;
  deleteManyProject: AffectedRowsOutput;
  deleteManyQuestion: AffectedRowsOutput;
  deleteManySketch: AffectedRowsOutput;
  deleteManyTech: AffectedRowsOutput;
  deleteManyTechCategory: AffectedRowsOutput;
  deleteMessage?: Maybe<Message>;
  deleteProject?: Maybe<Project>;
  deleteQuestion?: Maybe<Question>;
  deleteSketch?: Maybe<Sketch>;
  deleteStack?: Maybe<Stack>;
  deleteTech?: Maybe<Tech>;
  deleteTechCategory?: Maybe<TechCategory>;
  forgotPassword: Scalars['Boolean'];
  login?: Maybe<LoginReturnType>;
  logout?: Maybe<Scalars['Boolean']>;
  resetPassword: Scalars['String'];
  updateAbout?: Maybe<About>;
  updateAdmin?: Maybe<Admin>;
  updateImage?: Maybe<Scalars['String']>;
  updateMessage?: Maybe<Message>;
  updateProject?: Maybe<Project>;
  updateQuestion?: Maybe<Question>;
  updateSketch?: Maybe<Sketch>;
  updateStack?: Maybe<Stack>;
  updateTech?: Maybe<Tech>;
  updateTechCategory?: Maybe<TechCategory>;
  uploadMultipleFiles?: Maybe<Array<Scalars['String']>>;
  uploadSingleFile: Scalars['String'];
};


export type MutationConfirmAdminDeleteArgs = {
  code?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};


export type MutationConfirmEmailArgs = {
  code?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};


export type MutationConfirmTokenOrCodeArgs = {
  code?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};


export type MutationCreateAboutArgs = {
  data: AboutCreateInput;
};


export type MutationCreateAdminArgs = {
  data: AdminCreateInput;
};


export type MutationCreateManyQuestionArgs = {
  data: Array<QuestionCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateManySketchArgs = {
  data: Array<SketchCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateManyTechArgs = {
  data: Array<TechCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateManyTechCategoryArgs = {
  data: Array<TechCategoryCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateMessageArgs = {
  data: MessageCreateInput;
};


export type MutationCreateProjectArgs = {
  data: ProjectCreateInput;
};


export type MutationCreateProjectWithNestedRelationsArgs = {
  data: CreateProjectInput_Pwnr;
};


export type MutationCreateQuestionArgs = {
  data: QuestionCreateInput;
};


export type MutationCreateSketchArgs = {
  data: SketchCreateInput;
};


export type MutationCreateStackArgs = {
  data: StackCreateInput;
};


export type MutationCreateTechArgs = {
  data: TechCreateInput;
};


export type MutationCreateTechCategoryArgs = {
  data: TechCategoryCreateInput;
};


export type MutationDeleteAboutArgs = {
  where: AboutWhereUniqueInput;
};


export type MutationDeleteAdminArgs = {
  where: AdminWhereUniqueInput;
};


export type MutationDeleteFileArgs = {
  filename: Scalars['String'];
};


export type MutationDeleteManyAboutArgs = {
  where?: Maybe<AboutWhereInput>;
};


export type MutationDeleteManyMessageArgs = {
  where?: Maybe<MessageWhereInput>;
};


export type MutationDeleteManyProjectArgs = {
  where?: Maybe<ProjectWhereInput>;
};


export type MutationDeleteManyQuestionArgs = {
  where?: Maybe<QuestionWhereInput>;
};


export type MutationDeleteManySketchArgs = {
  where?: Maybe<SketchWhereInput>;
};


export type MutationDeleteManyTechArgs = {
  where?: Maybe<TechWhereInput>;
};


export type MutationDeleteManyTechCategoryArgs = {
  where?: Maybe<TechCategoryWhereInput>;
};


export type MutationDeleteMessageArgs = {
  where: MessageWhereUniqueInput;
};


export type MutationDeleteProjectArgs = {
  where: ProjectWhereUniqueInput;
};


export type MutationDeleteQuestionArgs = {
  where: QuestionWhereUniqueInput;
};


export type MutationDeleteSketchArgs = {
  where: SketchWhereUniqueInput;
};


export type MutationDeleteStackArgs = {
  where: StackWhereUniqueInput;
};


export type MutationDeleteTechArgs = {
  where: TechWhereUniqueInput;
};


export type MutationDeleteTechCategoryArgs = {
  where: TechCategoryWhereUniqueInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  data: LoginInputType;
};


export type MutationResetPasswordArgs = {
  code?: Maybe<Scalars['Int']>;
  confirmPassword: Scalars['String'];
  email: Scalars['String'];
  newPassword: Scalars['String'];
  token?: Maybe<Scalars['String']>;
};


export type MutationUpdateAboutArgs = {
  data: AboutUpdateInput;
  where: AboutWhereUniqueInput;
};


export type MutationUpdateAdminArgs = {
  data: AdminUpdateInput;
  where: AdminWhereUniqueInput;
};


export type MutationUpdateImageArgs = {
  field?: Maybe<Scalars['String']>;
  file: Scalars['Upload'];
  id: Scalars['String'];
  isEdit?: Maybe<Scalars['Boolean']>;
  prevname: Scalars['String'];
};


export type MutationUpdateMessageArgs = {
  data: MessageUpdateInput;
  where: MessageWhereUniqueInput;
};


export type MutationUpdateProjectArgs = {
  data: ProjectUpdateInput;
  where: ProjectWhereUniqueInput;
};


export type MutationUpdateQuestionArgs = {
  data: QuestionUpdateInput;
  where: QuestionWhereUniqueInput;
};


export type MutationUpdateSketchArgs = {
  data: SketchUpdateInput;
  where: SketchWhereUniqueInput;
};


export type MutationUpdateStackArgs = {
  data: StackUpdateInput;
  where: StackWhereUniqueInput;
};


export type MutationUpdateTechArgs = {
  data: TechUpdateInput;
  where: TechWhereUniqueInput;
};


export type MutationUpdateTechCategoryArgs = {
  data: TechCategoryUpdateInput;
  where: TechCategoryWhereUniqueInput;
};


export type MutationUploadMultipleFilesArgs = {
  files: Array<Scalars['Upload']>;
};


export type MutationUploadSingleFileArgs = {
  file: Scalars['Upload'];
  isEdit?: Maybe<Scalars['Boolean']>;
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedStringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type Project = {
  __typename?: 'Project';
  _count?: Maybe<ProjectCount>;
  admin: Admin;
  admin_id: Scalars['String'];
  app_url: Scalars['String'];
  createdAt: Scalars['DateTime'];
  github_url: Scalars['String'];
  id: Scalars['String'];
  image: Scalars['String'];
  name: Scalars['String'];
  questions: Array<Question>;
  sketches: Array<Sketch>;
  summary: Scalars['String'];
  tech_categories: Array<TechCategory>;
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type ProjectQuestionsArgs = {
  cursor?: Maybe<QuestionWhereUniqueInput>;
  distinct?: Maybe<Array<QuestionScalarFieldEnum>>;
  orderBy?: Maybe<Array<QuestionOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<QuestionWhereInput>;
};


export type ProjectSketchesArgs = {
  cursor?: Maybe<SketchWhereUniqueInput>;
  distinct?: Maybe<Array<SketchScalarFieldEnum>>;
  orderBy?: Maybe<Array<SketchOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SketchWhereInput>;
};


export type ProjectTech_CategoriesArgs = {
  cursor?: Maybe<TechCategoryWhereUniqueInput>;
  distinct?: Maybe<Array<TechCategoryScalarFieldEnum>>;
  orderBy?: Maybe<Array<TechCategoryOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TechCategoryWhereInput>;
};

export type ProjectCount = {
  __typename?: 'ProjectCount';
  questions: Scalars['Int'];
  sketches: Scalars['Int'];
  tech_categories: Scalars['Int'];
};

export type ProjectCreateInput = {
  admin: AdminCreateNestedOneWithoutProjectsInput;
  app_url: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  github_url: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  image: Scalars['String'];
  name: Scalars['String'];
  questions?: Maybe<QuestionCreateNestedManyWithoutProjectInput>;
  sketches?: Maybe<SketchCreateNestedManyWithoutProjectInput>;
  summary: Scalars['String'];
  tech_categories?: Maybe<TechCategoryCreateNestedManyWithoutProjectInput>;
  type: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProjectCreateManyAdminInput = {
  app_url: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  github_url: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  image: Scalars['String'];
  name: Scalars['String'];
  summary: Scalars['String'];
  type: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProjectCreateManyAdminInputEnvelope = {
  data: Array<ProjectCreateManyAdminInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProjectCreateNestedManyWithoutAdminInput = {
  connect?: Maybe<Array<ProjectWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ProjectCreateOrConnectWithoutAdminInput>>;
  create?: Maybe<Array<ProjectCreateWithoutAdminInput>>;
  createMany?: Maybe<ProjectCreateManyAdminInputEnvelope>;
};

export type ProjectCreateNestedOneWithoutQuestionsInput = {
  connect?: Maybe<ProjectWhereUniqueInput>;
  connectOrCreate?: Maybe<ProjectCreateOrConnectWithoutQuestionsInput>;
  create?: Maybe<ProjectCreateWithoutQuestionsInput>;
};

export type ProjectCreateNestedOneWithoutSketchesInput = {
  connect?: Maybe<ProjectWhereUniqueInput>;
  connectOrCreate?: Maybe<ProjectCreateOrConnectWithoutSketchesInput>;
  create?: Maybe<ProjectCreateWithoutSketchesInput>;
};

export type ProjectCreateNestedOneWithoutTech_CategoriesInput = {
  connect?: Maybe<ProjectWhereUniqueInput>;
  connectOrCreate?: Maybe<ProjectCreateOrConnectWithoutTech_CategoriesInput>;
  create?: Maybe<ProjectCreateWithoutTech_CategoriesInput>;
};

export type ProjectCreateOrConnectWithoutAdminInput = {
  create: ProjectCreateWithoutAdminInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateOrConnectWithoutQuestionsInput = {
  create: ProjectCreateWithoutQuestionsInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateOrConnectWithoutSketchesInput = {
  create: ProjectCreateWithoutSketchesInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateOrConnectWithoutTech_CategoriesInput = {
  create: ProjectCreateWithoutTech_CategoriesInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateWithoutAdminInput = {
  app_url: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  github_url: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  image: Scalars['String'];
  name: Scalars['String'];
  questions?: Maybe<QuestionCreateNestedManyWithoutProjectInput>;
  sketches?: Maybe<SketchCreateNestedManyWithoutProjectInput>;
  summary: Scalars['String'];
  tech_categories?: Maybe<TechCategoryCreateNestedManyWithoutProjectInput>;
  type: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProjectCreateWithoutQuestionsInput = {
  admin: AdminCreateNestedOneWithoutProjectsInput;
  app_url: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  github_url: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  image: Scalars['String'];
  name: Scalars['String'];
  sketches?: Maybe<SketchCreateNestedManyWithoutProjectInput>;
  summary: Scalars['String'];
  tech_categories?: Maybe<TechCategoryCreateNestedManyWithoutProjectInput>;
  type: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProjectCreateWithoutSketchesInput = {
  admin: AdminCreateNestedOneWithoutProjectsInput;
  app_url: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  github_url: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  image: Scalars['String'];
  name: Scalars['String'];
  questions?: Maybe<QuestionCreateNestedManyWithoutProjectInput>;
  summary: Scalars['String'];
  tech_categories?: Maybe<TechCategoryCreateNestedManyWithoutProjectInput>;
  type: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProjectCreateWithoutTech_CategoriesInput = {
  admin: AdminCreateNestedOneWithoutProjectsInput;
  app_url: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  github_url: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  image: Scalars['String'];
  name: Scalars['String'];
  questions?: Maybe<QuestionCreateNestedManyWithoutProjectInput>;
  sketches?: Maybe<SketchCreateNestedManyWithoutProjectInput>;
  summary: Scalars['String'];
  type: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProjectListRelationFilter = {
  every?: Maybe<ProjectWhereInput>;
  none?: Maybe<ProjectWhereInput>;
  some?: Maybe<ProjectWhereInput>;
};

export type ProjectOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type ProjectOrderByWithRelationInput = {
  admin?: Maybe<AdminOrderByWithRelationInput>;
  admin_id?: Maybe<SortOrder>;
  app_url?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  github_url?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  questions?: Maybe<QuestionOrderByRelationAggregateInput>;
  sketches?: Maybe<SketchOrderByRelationAggregateInput>;
  summary?: Maybe<SortOrder>;
  tech_categories?: Maybe<TechCategoryOrderByRelationAggregateInput>;
  type?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ProjectRelationFilter = {
  is?: Maybe<ProjectWhereInput>;
  isNot?: Maybe<ProjectWhereInput>;
};

export enum ProjectScalarFieldEnum {
  AdminId = 'admin_id',
  AppUrl = 'app_url',
  CreatedAt = 'createdAt',
  GithubUrl = 'github_url',
  Id = 'id',
  Image = 'image',
  Name = 'name',
  Summary = 'summary',
  Type = 'type',
  UpdatedAt = 'updatedAt'
}

export type ProjectScalarWhereInput = {
  AND?: Maybe<Array<ProjectScalarWhereInput>>;
  NOT?: Maybe<Array<ProjectScalarWhereInput>>;
  OR?: Maybe<Array<ProjectScalarWhereInput>>;
  admin_id?: Maybe<StringFilter>;
  app_url?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  github_url?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  image?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  summary?: Maybe<StringFilter>;
  type?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type ProjectUpdateInput = {
  admin?: Maybe<AdminUpdateOneRequiredWithoutProjectsInput>;
  app_url?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  github_url?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  questions?: Maybe<QuestionUpdateManyWithoutProjectInput>;
  sketches?: Maybe<SketchUpdateManyWithoutProjectInput>;
  summary?: Maybe<StringFieldUpdateOperationsInput>;
  tech_categories?: Maybe<TechCategoryUpdateManyWithoutProjectInput>;
  type?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUpdateManyMutationInput = {
  app_url?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  github_url?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  summary?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUpdateManyWithWhereWithoutAdminInput = {
  data: ProjectUpdateManyMutationInput;
  where: ProjectScalarWhereInput;
};

export type ProjectUpdateManyWithoutAdminInput = {
  connect?: Maybe<Array<ProjectWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ProjectCreateOrConnectWithoutAdminInput>>;
  create?: Maybe<Array<ProjectCreateWithoutAdminInput>>;
  createMany?: Maybe<ProjectCreateManyAdminInputEnvelope>;
  delete?: Maybe<Array<ProjectWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ProjectScalarWhereInput>>;
  disconnect?: Maybe<Array<ProjectWhereUniqueInput>>;
  set?: Maybe<Array<ProjectWhereUniqueInput>>;
  update?: Maybe<Array<ProjectUpdateWithWhereUniqueWithoutAdminInput>>;
  updateMany?: Maybe<Array<ProjectUpdateManyWithWhereWithoutAdminInput>>;
  upsert?: Maybe<Array<ProjectUpsertWithWhereUniqueWithoutAdminInput>>;
};

export type ProjectUpdateOneRequiredWithoutQuestionsInput = {
  connect?: Maybe<ProjectWhereUniqueInput>;
  connectOrCreate?: Maybe<ProjectCreateOrConnectWithoutQuestionsInput>;
  create?: Maybe<ProjectCreateWithoutQuestionsInput>;
  update?: Maybe<ProjectUpdateWithoutQuestionsInput>;
  upsert?: Maybe<ProjectUpsertWithoutQuestionsInput>;
};

export type ProjectUpdateOneRequiredWithoutSketchesInput = {
  connect?: Maybe<ProjectWhereUniqueInput>;
  connectOrCreate?: Maybe<ProjectCreateOrConnectWithoutSketchesInput>;
  create?: Maybe<ProjectCreateWithoutSketchesInput>;
  update?: Maybe<ProjectUpdateWithoutSketchesInput>;
  upsert?: Maybe<ProjectUpsertWithoutSketchesInput>;
};

export type ProjectUpdateOneRequiredWithoutTech_CategoriesInput = {
  connect?: Maybe<ProjectWhereUniqueInput>;
  connectOrCreate?: Maybe<ProjectCreateOrConnectWithoutTech_CategoriesInput>;
  create?: Maybe<ProjectCreateWithoutTech_CategoriesInput>;
  update?: Maybe<ProjectUpdateWithoutTech_CategoriesInput>;
  upsert?: Maybe<ProjectUpsertWithoutTech_CategoriesInput>;
};

export type ProjectUpdateWithWhereUniqueWithoutAdminInput = {
  data: ProjectUpdateWithoutAdminInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpdateWithoutAdminInput = {
  app_url?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  github_url?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  questions?: Maybe<QuestionUpdateManyWithoutProjectInput>;
  sketches?: Maybe<SketchUpdateManyWithoutProjectInput>;
  summary?: Maybe<StringFieldUpdateOperationsInput>;
  tech_categories?: Maybe<TechCategoryUpdateManyWithoutProjectInput>;
  type?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUpdateWithoutQuestionsInput = {
  admin?: Maybe<AdminUpdateOneRequiredWithoutProjectsInput>;
  app_url?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  github_url?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  sketches?: Maybe<SketchUpdateManyWithoutProjectInput>;
  summary?: Maybe<StringFieldUpdateOperationsInput>;
  tech_categories?: Maybe<TechCategoryUpdateManyWithoutProjectInput>;
  type?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUpdateWithoutSketchesInput = {
  admin?: Maybe<AdminUpdateOneRequiredWithoutProjectsInput>;
  app_url?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  github_url?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  questions?: Maybe<QuestionUpdateManyWithoutProjectInput>;
  summary?: Maybe<StringFieldUpdateOperationsInput>;
  tech_categories?: Maybe<TechCategoryUpdateManyWithoutProjectInput>;
  type?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUpdateWithoutTech_CategoriesInput = {
  admin?: Maybe<AdminUpdateOneRequiredWithoutProjectsInput>;
  app_url?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  github_url?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  questions?: Maybe<QuestionUpdateManyWithoutProjectInput>;
  sketches?: Maybe<SketchUpdateManyWithoutProjectInput>;
  summary?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUpsertWithWhereUniqueWithoutAdminInput = {
  create: ProjectCreateWithoutAdminInput;
  update: ProjectUpdateWithoutAdminInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpsertWithoutQuestionsInput = {
  create: ProjectCreateWithoutQuestionsInput;
  update: ProjectUpdateWithoutQuestionsInput;
};

export type ProjectUpsertWithoutSketchesInput = {
  create: ProjectCreateWithoutSketchesInput;
  update: ProjectUpdateWithoutSketchesInput;
};

export type ProjectUpsertWithoutTech_CategoriesInput = {
  create: ProjectCreateWithoutTech_CategoriesInput;
  update: ProjectUpdateWithoutTech_CategoriesInput;
};

export type ProjectWhereInput = {
  AND?: Maybe<Array<ProjectWhereInput>>;
  NOT?: Maybe<Array<ProjectWhereInput>>;
  OR?: Maybe<Array<ProjectWhereInput>>;
  admin?: Maybe<AdminRelationFilter>;
  admin_id?: Maybe<StringFilter>;
  app_url?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  github_url?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  image?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  questions?: Maybe<QuestionListRelationFilter>;
  sketches?: Maybe<SketchListRelationFilter>;
  summary?: Maybe<StringFilter>;
  tech_categories?: Maybe<TechCategoryListRelationFilter>;
  type?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type ProjectWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  about?: Maybe<About>;
  abouts: Array<About>;
  getAdmin: Admin;
  getNumOfAdmins?: Maybe<Scalars['Int']>;
  isThereAnAdmin: Scalars['Boolean'];
  me?: Maybe<Admin>;
  message?: Maybe<Message>;
  messages: Array<Message>;
  project?: Maybe<Project>;
  projects: Array<Project>;
  question?: Maybe<Question>;
  questions: Array<Question>;
  sketch?: Maybe<Sketch>;
  sketches: Array<Sketch>;
  stacks: Array<Stack>;
  tech?: Maybe<Tech>;
  techCategories: Array<TechCategory>;
  techCategory?: Maybe<TechCategory>;
  teches: Array<Tech>;
};


export type QueryAboutArgs = {
  where: AboutWhereUniqueInput;
};


export type QueryAboutsArgs = {
  cursor?: Maybe<AboutWhereUniqueInput>;
  distinct?: Maybe<Array<AboutScalarFieldEnum>>;
  orderBy?: Maybe<Array<AboutOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AboutWhereInput>;
};


export type QueryMessageArgs = {
  where: MessageWhereUniqueInput;
};


export type QueryMessagesArgs = {
  cursor?: Maybe<MessageWhereUniqueInput>;
  distinct?: Maybe<Array<MessageScalarFieldEnum>>;
  orderBy?: Maybe<Array<MessageOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<MessageWhereInput>;
};


export type QueryProjectArgs = {
  where: ProjectWhereUniqueInput;
};


export type QueryProjectsArgs = {
  cursor?: Maybe<ProjectWhereUniqueInput>;
  distinct?: Maybe<Array<ProjectScalarFieldEnum>>;
  orderBy?: Maybe<Array<ProjectOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProjectWhereInput>;
};


export type QueryQuestionArgs = {
  where: QuestionWhereUniqueInput;
};


export type QueryQuestionsArgs = {
  cursor?: Maybe<QuestionWhereUniqueInput>;
  distinct?: Maybe<Array<QuestionScalarFieldEnum>>;
  orderBy?: Maybe<Array<QuestionOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<QuestionWhereInput>;
};


export type QuerySketchArgs = {
  where: SketchWhereUniqueInput;
};


export type QuerySketchesArgs = {
  cursor?: Maybe<SketchWhereUniqueInput>;
  distinct?: Maybe<Array<SketchScalarFieldEnum>>;
  orderBy?: Maybe<Array<SketchOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SketchWhereInput>;
};


export type QueryStacksArgs = {
  cursor?: Maybe<StackWhereUniqueInput>;
  distinct?: Maybe<Array<StackScalarFieldEnum>>;
  orderBy?: Maybe<Array<StackOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<StackWhereInput>;
};


export type QueryTechArgs = {
  where: TechWhereUniqueInput;
};


export type QueryTechCategoriesArgs = {
  cursor?: Maybe<TechCategoryWhereUniqueInput>;
  distinct?: Maybe<Array<TechCategoryScalarFieldEnum>>;
  orderBy?: Maybe<Array<TechCategoryOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TechCategoryWhereInput>;
};


export type QueryTechCategoryArgs = {
  where: TechCategoryWhereUniqueInput;
};


export type QueryTechesArgs = {
  cursor?: Maybe<TechWhereUniqueInput>;
  distinct?: Maybe<Array<TechScalarFieldEnum>>;
  orderBy?: Maybe<Array<TechOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TechWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Question = {
  __typename?: 'Question';
  answer: Scalars['String'];
  id: Scalars['String'];
  project: Project;
  project_id: Scalars['String'];
  question: Scalars['String'];
};

export type QuestionCreateInput = {
  answer: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  project: ProjectCreateNestedOneWithoutQuestionsInput;
  question: Scalars['String'];
};

export type QuestionCreateInput_Pwnr = {
  answer: Scalars['String'];
  question: Scalars['String'];
};

export type QuestionCreateManyInput = {
  answer: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  project_id: Scalars['String'];
  question: Scalars['String'];
};

export type QuestionCreateManyProjectInput = {
  answer: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  question: Scalars['String'];
};

export type QuestionCreateManyProjectInputEnvelope = {
  data: Array<QuestionCreateManyProjectInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type QuestionCreateNestedManyWithoutProjectInput = {
  connect?: Maybe<Array<QuestionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<QuestionCreateOrConnectWithoutProjectInput>>;
  create?: Maybe<Array<QuestionCreateWithoutProjectInput>>;
  createMany?: Maybe<QuestionCreateManyProjectInputEnvelope>;
};

export type QuestionCreateOrConnectWithoutProjectInput = {
  create: QuestionCreateWithoutProjectInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionCreateWithoutProjectInput = {
  answer: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  question: Scalars['String'];
};

export type QuestionListRelationFilter = {
  every?: Maybe<QuestionWhereInput>;
  none?: Maybe<QuestionWhereInput>;
  some?: Maybe<QuestionWhereInput>;
};

export type QuestionOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type QuestionOrderByWithRelationInput = {
  answer?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  project?: Maybe<ProjectOrderByWithRelationInput>;
  project_id?: Maybe<SortOrder>;
  question?: Maybe<SortOrder>;
};

export enum QuestionScalarFieldEnum {
  Answer = 'answer',
  Id = 'id',
  ProjectId = 'project_id',
  Question = 'question'
}

export type QuestionScalarWhereInput = {
  AND?: Maybe<Array<QuestionScalarWhereInput>>;
  NOT?: Maybe<Array<QuestionScalarWhereInput>>;
  OR?: Maybe<Array<QuestionScalarWhereInput>>;
  answer?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  project_id?: Maybe<StringFilter>;
  question?: Maybe<StringFilter>;
};

export type QuestionUpdateInput = {
  answer?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  project?: Maybe<ProjectUpdateOneRequiredWithoutQuestionsInput>;
  question?: Maybe<StringFieldUpdateOperationsInput>;
};

export type QuestionUpdateManyMutationInput = {
  answer?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  question?: Maybe<StringFieldUpdateOperationsInput>;
};

export type QuestionUpdateManyWithWhereWithoutProjectInput = {
  data: QuestionUpdateManyMutationInput;
  where: QuestionScalarWhereInput;
};

export type QuestionUpdateManyWithoutProjectInput = {
  connect?: Maybe<Array<QuestionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<QuestionCreateOrConnectWithoutProjectInput>>;
  create?: Maybe<Array<QuestionCreateWithoutProjectInput>>;
  createMany?: Maybe<QuestionCreateManyProjectInputEnvelope>;
  delete?: Maybe<Array<QuestionWhereUniqueInput>>;
  deleteMany?: Maybe<Array<QuestionScalarWhereInput>>;
  disconnect?: Maybe<Array<QuestionWhereUniqueInput>>;
  set?: Maybe<Array<QuestionWhereUniqueInput>>;
  update?: Maybe<Array<QuestionUpdateWithWhereUniqueWithoutProjectInput>>;
  updateMany?: Maybe<Array<QuestionUpdateManyWithWhereWithoutProjectInput>>;
  upsert?: Maybe<Array<QuestionUpsertWithWhereUniqueWithoutProjectInput>>;
};

export type QuestionUpdateWithWhereUniqueWithoutProjectInput = {
  data: QuestionUpdateWithoutProjectInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionUpdateWithoutProjectInput = {
  answer?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  question?: Maybe<StringFieldUpdateOperationsInput>;
};

export type QuestionUpsertWithWhereUniqueWithoutProjectInput = {
  create: QuestionCreateWithoutProjectInput;
  update: QuestionUpdateWithoutProjectInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionWhereInput = {
  AND?: Maybe<Array<QuestionWhereInput>>;
  NOT?: Maybe<Array<QuestionWhereInput>>;
  OR?: Maybe<Array<QuestionWhereInput>>;
  answer?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  project?: Maybe<ProjectRelationFilter>;
  project_id?: Maybe<StringFilter>;
  question?: Maybe<StringFilter>;
};

export type QuestionWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Sketch = {
  __typename?: 'Sketch';
  description: Scalars['String'];
  download_link: Scalars['String'];
  id: Scalars['String'];
  image: Scalars['String'];
  project: Project;
  project_id: Scalars['String'];
  summary: Scalars['String'];
  title: Scalars['String'];
};

export type SketchCreateInput = {
  description: Scalars['String'];
  download_link: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  image: Scalars['String'];
  project: ProjectCreateNestedOneWithoutSketchesInput;
  summary: Scalars['String'];
  title: Scalars['String'];
};

export type SketchCreateInput_Pwnr = {
  description: Scalars['String'];
  download_link: Scalars['String'];
  image: Scalars['String'];
  summary: Scalars['String'];
  title: Scalars['String'];
};

export type SketchCreateManyInput = {
  description: Scalars['String'];
  download_link: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  image: Scalars['String'];
  project_id: Scalars['String'];
  summary: Scalars['String'];
  title: Scalars['String'];
};

export type SketchCreateManyProjectInput = {
  description: Scalars['String'];
  download_link: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  image: Scalars['String'];
  summary: Scalars['String'];
  title: Scalars['String'];
};

export type SketchCreateManyProjectInputEnvelope = {
  data: Array<SketchCreateManyProjectInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type SketchCreateNestedManyWithoutProjectInput = {
  connect?: Maybe<Array<SketchWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<SketchCreateOrConnectWithoutProjectInput>>;
  create?: Maybe<Array<SketchCreateWithoutProjectInput>>;
  createMany?: Maybe<SketchCreateManyProjectInputEnvelope>;
};

export type SketchCreateOrConnectWithoutProjectInput = {
  create: SketchCreateWithoutProjectInput;
  where: SketchWhereUniqueInput;
};

export type SketchCreateWithoutProjectInput = {
  description: Scalars['String'];
  download_link: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  image: Scalars['String'];
  summary: Scalars['String'];
  title: Scalars['String'];
};

export type SketchListRelationFilter = {
  every?: Maybe<SketchWhereInput>;
  none?: Maybe<SketchWhereInput>;
  some?: Maybe<SketchWhereInput>;
};

export type SketchOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type SketchOrderByWithRelationInput = {
  description?: Maybe<SortOrder>;
  download_link?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  project?: Maybe<ProjectOrderByWithRelationInput>;
  project_id?: Maybe<SortOrder>;
  summary?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
};

export enum SketchScalarFieldEnum {
  Description = 'description',
  DownloadLink = 'download_link',
  Id = 'id',
  Image = 'image',
  ProjectId = 'project_id',
  Summary = 'summary',
  Title = 'title'
}

export type SketchScalarWhereInput = {
  AND?: Maybe<Array<SketchScalarWhereInput>>;
  NOT?: Maybe<Array<SketchScalarWhereInput>>;
  OR?: Maybe<Array<SketchScalarWhereInput>>;
  description?: Maybe<StringFilter>;
  download_link?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  image?: Maybe<StringFilter>;
  project_id?: Maybe<StringFilter>;
  summary?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
};

export type SketchUpdateInput = {
  description?: Maybe<StringFieldUpdateOperationsInput>;
  download_link?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<StringFieldUpdateOperationsInput>;
  project?: Maybe<ProjectUpdateOneRequiredWithoutSketchesInput>;
  summary?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
};

export type SketchUpdateManyMutationInput = {
  description?: Maybe<StringFieldUpdateOperationsInput>;
  download_link?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<StringFieldUpdateOperationsInput>;
  summary?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
};

export type SketchUpdateManyWithWhereWithoutProjectInput = {
  data: SketchUpdateManyMutationInput;
  where: SketchScalarWhereInput;
};

export type SketchUpdateManyWithoutProjectInput = {
  connect?: Maybe<Array<SketchWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<SketchCreateOrConnectWithoutProjectInput>>;
  create?: Maybe<Array<SketchCreateWithoutProjectInput>>;
  createMany?: Maybe<SketchCreateManyProjectInputEnvelope>;
  delete?: Maybe<Array<SketchWhereUniqueInput>>;
  deleteMany?: Maybe<Array<SketchScalarWhereInput>>;
  disconnect?: Maybe<Array<SketchWhereUniqueInput>>;
  set?: Maybe<Array<SketchWhereUniqueInput>>;
  update?: Maybe<Array<SketchUpdateWithWhereUniqueWithoutProjectInput>>;
  updateMany?: Maybe<Array<SketchUpdateManyWithWhereWithoutProjectInput>>;
  upsert?: Maybe<Array<SketchUpsertWithWhereUniqueWithoutProjectInput>>;
};

export type SketchUpdateWithWhereUniqueWithoutProjectInput = {
  data: SketchUpdateWithoutProjectInput;
  where: SketchWhereUniqueInput;
};

export type SketchUpdateWithoutProjectInput = {
  description?: Maybe<StringFieldUpdateOperationsInput>;
  download_link?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<StringFieldUpdateOperationsInput>;
  summary?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
};

export type SketchUpsertWithWhereUniqueWithoutProjectInput = {
  create: SketchCreateWithoutProjectInput;
  update: SketchUpdateWithoutProjectInput;
  where: SketchWhereUniqueInput;
};

export type SketchWhereInput = {
  AND?: Maybe<Array<SketchWhereInput>>;
  NOT?: Maybe<Array<SketchWhereInput>>;
  OR?: Maybe<Array<SketchWhereInput>>;
  description?: Maybe<StringFilter>;
  download_link?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  image?: Maybe<StringFilter>;
  project?: Maybe<ProjectRelationFilter>;
  project_id?: Maybe<StringFilter>;
  summary?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
};

export type SketchWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type Stack = {
  __typename?: 'Stack';
  admin_id: Scalars['String'];
  id: Scalars['String'];
  image: Scalars['String'];
  title: Scalars['String'];
};

export type StackCreateInput = {
  admin: AdminCreateNestedOneWithoutStackInput;
  id?: Maybe<Scalars['String']>;
  image: Scalars['String'];
  title: Scalars['String'];
};

export type StackCreateManyAdminInput = {
  id?: Maybe<Scalars['String']>;
  image: Scalars['String'];
  title: Scalars['String'];
};

export type StackCreateManyAdminInputEnvelope = {
  data: Array<StackCreateManyAdminInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type StackCreateNestedManyWithoutAdminInput = {
  connect?: Maybe<Array<StackWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<StackCreateOrConnectWithoutAdminInput>>;
  create?: Maybe<Array<StackCreateWithoutAdminInput>>;
  createMany?: Maybe<StackCreateManyAdminInputEnvelope>;
};

export type StackCreateOrConnectWithoutAdminInput = {
  create: StackCreateWithoutAdminInput;
  where: StackWhereUniqueInput;
};

export type StackCreateWithoutAdminInput = {
  id?: Maybe<Scalars['String']>;
  image: Scalars['String'];
  title: Scalars['String'];
};

export type StackListRelationFilter = {
  every?: Maybe<StackWhereInput>;
  none?: Maybe<StackWhereInput>;
  some?: Maybe<StackWhereInput>;
};

export type StackOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type StackOrderByWithRelationInput = {
  admin?: Maybe<AdminOrderByWithRelationInput>;
  admin_id?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
};

export enum StackScalarFieldEnum {
  AdminId = 'admin_id',
  Id = 'id',
  Image = 'image',
  Title = 'title'
}

export type StackScalarWhereInput = {
  AND?: Maybe<Array<StackScalarWhereInput>>;
  NOT?: Maybe<Array<StackScalarWhereInput>>;
  OR?: Maybe<Array<StackScalarWhereInput>>;
  admin_id?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  image?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
};

export type StackUpdateInput = {
  admin?: Maybe<AdminUpdateOneRequiredWithoutStackInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
};

export type StackUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
};

export type StackUpdateManyWithWhereWithoutAdminInput = {
  data: StackUpdateManyMutationInput;
  where: StackScalarWhereInput;
};

export type StackUpdateManyWithoutAdminInput = {
  connect?: Maybe<Array<StackWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<StackCreateOrConnectWithoutAdminInput>>;
  create?: Maybe<Array<StackCreateWithoutAdminInput>>;
  createMany?: Maybe<StackCreateManyAdminInputEnvelope>;
  delete?: Maybe<Array<StackWhereUniqueInput>>;
  deleteMany?: Maybe<Array<StackScalarWhereInput>>;
  disconnect?: Maybe<Array<StackWhereUniqueInput>>;
  set?: Maybe<Array<StackWhereUniqueInput>>;
  update?: Maybe<Array<StackUpdateWithWhereUniqueWithoutAdminInput>>;
  updateMany?: Maybe<Array<StackUpdateManyWithWhereWithoutAdminInput>>;
  upsert?: Maybe<Array<StackUpsertWithWhereUniqueWithoutAdminInput>>;
};

export type StackUpdateWithWhereUniqueWithoutAdminInput = {
  data: StackUpdateWithoutAdminInput;
  where: StackWhereUniqueInput;
};

export type StackUpdateWithoutAdminInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
};

export type StackUpsertWithWhereUniqueWithoutAdminInput = {
  create: StackCreateWithoutAdminInput;
  update: StackUpdateWithoutAdminInput;
  where: StackWhereUniqueInput;
};

export type StackWhereInput = {
  AND?: Maybe<Array<StackWhereInput>>;
  NOT?: Maybe<Array<StackWhereInput>>;
  OR?: Maybe<Array<StackWhereInput>>;
  admin?: Maybe<AdminRelationFilter>;
  admin_id?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  image?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
};

export type StackWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableListFilter = {
  equals?: Maybe<Array<Scalars['String']>>;
  has?: Maybe<Scalars['String']>;
  hasEvery?: Maybe<Array<Scalars['String']>>;
  hasSome?: Maybe<Array<Scalars['String']>>;
  isEmpty?: Maybe<Scalars['Boolean']>;
};

export type Tech = {
  __typename?: 'Tech';
  id: Scalars['String'];
  name: Scalars['String'];
  tech_categories: TechCategory;
  tech_category_id: Scalars['String'];
};

export type TechCategory = {
  __typename?: 'TechCategory';
  _count?: Maybe<TechCategoryCount>;
  id: Scalars['String'];
  name: Scalars['String'];
  project: Project;
  project_id: Scalars['String'];
  techs: Array<Tech>;
};


export type TechCategoryTechsArgs = {
  cursor?: Maybe<TechWhereUniqueInput>;
  distinct?: Maybe<Array<TechScalarFieldEnum>>;
  orderBy?: Maybe<Array<TechOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TechWhereInput>;
};

export type TechCategoryCount = {
  __typename?: 'TechCategoryCount';
  techs: Scalars['Int'];
};

export type TechCategoryCreateInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  project: ProjectCreateNestedOneWithoutTech_CategoriesInput;
  techs?: Maybe<TechCreateNestedManyWithoutTech_CategoriesInput>;
};

export type TechCategoryCreateInput_Pwnr = {
  name: Scalars['String'];
  techs: Array<TechCreateInput_Pwnr>;
};

export type TechCategoryCreateManyInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  project_id: Scalars['String'];
};

export type TechCategoryCreateManyProjectInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type TechCategoryCreateManyProjectInputEnvelope = {
  data: Array<TechCategoryCreateManyProjectInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type TechCategoryCreateNestedManyWithoutProjectInput = {
  connect?: Maybe<Array<TechCategoryWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TechCategoryCreateOrConnectWithoutProjectInput>>;
  create?: Maybe<Array<TechCategoryCreateWithoutProjectInput>>;
  createMany?: Maybe<TechCategoryCreateManyProjectInputEnvelope>;
};

export type TechCategoryCreateNestedOneWithoutTechsInput = {
  connect?: Maybe<TechCategoryWhereUniqueInput>;
  connectOrCreate?: Maybe<TechCategoryCreateOrConnectWithoutTechsInput>;
  create?: Maybe<TechCategoryCreateWithoutTechsInput>;
};

export type TechCategoryCreateOrConnectWithoutProjectInput = {
  create: TechCategoryCreateWithoutProjectInput;
  where: TechCategoryWhereUniqueInput;
};

export type TechCategoryCreateOrConnectWithoutTechsInput = {
  create: TechCategoryCreateWithoutTechsInput;
  where: TechCategoryWhereUniqueInput;
};

export type TechCategoryCreateWithoutProjectInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  techs?: Maybe<TechCreateNestedManyWithoutTech_CategoriesInput>;
};

export type TechCategoryCreateWithoutTechsInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  project: ProjectCreateNestedOneWithoutTech_CategoriesInput;
};

export type TechCategoryListRelationFilter = {
  every?: Maybe<TechCategoryWhereInput>;
  none?: Maybe<TechCategoryWhereInput>;
  some?: Maybe<TechCategoryWhereInput>;
};

export type TechCategoryOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type TechCategoryOrderByWithRelationInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  project?: Maybe<ProjectOrderByWithRelationInput>;
  project_id?: Maybe<SortOrder>;
  techs?: Maybe<TechOrderByRelationAggregateInput>;
};

export type TechCategoryRelationFilter = {
  is?: Maybe<TechCategoryWhereInput>;
  isNot?: Maybe<TechCategoryWhereInput>;
};

export enum TechCategoryScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  ProjectId = 'project_id'
}

export type TechCategoryScalarWhereInput = {
  AND?: Maybe<Array<TechCategoryScalarWhereInput>>;
  NOT?: Maybe<Array<TechCategoryScalarWhereInput>>;
  OR?: Maybe<Array<TechCategoryScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  project_id?: Maybe<StringFilter>;
};

export type TechCategoryUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  project?: Maybe<ProjectUpdateOneRequiredWithoutTech_CategoriesInput>;
  techs?: Maybe<TechUpdateManyWithoutTech_CategoriesInput>;
};

export type TechCategoryUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TechCategoryUpdateManyWithWhereWithoutProjectInput = {
  data: TechCategoryUpdateManyMutationInput;
  where: TechCategoryScalarWhereInput;
};

export type TechCategoryUpdateManyWithoutProjectInput = {
  connect?: Maybe<Array<TechCategoryWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TechCategoryCreateOrConnectWithoutProjectInput>>;
  create?: Maybe<Array<TechCategoryCreateWithoutProjectInput>>;
  createMany?: Maybe<TechCategoryCreateManyProjectInputEnvelope>;
  delete?: Maybe<Array<TechCategoryWhereUniqueInput>>;
  deleteMany?: Maybe<Array<TechCategoryScalarWhereInput>>;
  disconnect?: Maybe<Array<TechCategoryWhereUniqueInput>>;
  set?: Maybe<Array<TechCategoryWhereUniqueInput>>;
  update?: Maybe<Array<TechCategoryUpdateWithWhereUniqueWithoutProjectInput>>;
  updateMany?: Maybe<Array<TechCategoryUpdateManyWithWhereWithoutProjectInput>>;
  upsert?: Maybe<Array<TechCategoryUpsertWithWhereUniqueWithoutProjectInput>>;
};

export type TechCategoryUpdateOneRequiredWithoutTechsInput = {
  connect?: Maybe<TechCategoryWhereUniqueInput>;
  connectOrCreate?: Maybe<TechCategoryCreateOrConnectWithoutTechsInput>;
  create?: Maybe<TechCategoryCreateWithoutTechsInput>;
  update?: Maybe<TechCategoryUpdateWithoutTechsInput>;
  upsert?: Maybe<TechCategoryUpsertWithoutTechsInput>;
};

export type TechCategoryUpdateWithWhereUniqueWithoutProjectInput = {
  data: TechCategoryUpdateWithoutProjectInput;
  where: TechCategoryWhereUniqueInput;
};

export type TechCategoryUpdateWithoutProjectInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  techs?: Maybe<TechUpdateManyWithoutTech_CategoriesInput>;
};

export type TechCategoryUpdateWithoutTechsInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  project?: Maybe<ProjectUpdateOneRequiredWithoutTech_CategoriesInput>;
};

export type TechCategoryUpsertWithWhereUniqueWithoutProjectInput = {
  create: TechCategoryCreateWithoutProjectInput;
  update: TechCategoryUpdateWithoutProjectInput;
  where: TechCategoryWhereUniqueInput;
};

export type TechCategoryUpsertWithoutTechsInput = {
  create: TechCategoryCreateWithoutTechsInput;
  update: TechCategoryUpdateWithoutTechsInput;
};

export type TechCategoryWhereInput = {
  AND?: Maybe<Array<TechCategoryWhereInput>>;
  NOT?: Maybe<Array<TechCategoryWhereInput>>;
  OR?: Maybe<Array<TechCategoryWhereInput>>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  project?: Maybe<ProjectRelationFilter>;
  project_id?: Maybe<StringFilter>;
  techs?: Maybe<TechListRelationFilter>;
};

export type TechCategoryWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type TechCreateInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  tech_categories: TechCategoryCreateNestedOneWithoutTechsInput;
};

export type TechCreateInput_Pwnr = {
  name: Scalars['String'];
};

export type TechCreateManyInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  tech_category_id: Scalars['String'];
};

export type TechCreateManyTech_CategoriesInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type TechCreateManyTech_CategoriesInputEnvelope = {
  data: Array<TechCreateManyTech_CategoriesInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type TechCreateNestedManyWithoutTech_CategoriesInput = {
  connect?: Maybe<Array<TechWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TechCreateOrConnectWithoutTech_CategoriesInput>>;
  create?: Maybe<Array<TechCreateWithoutTech_CategoriesInput>>;
  createMany?: Maybe<TechCreateManyTech_CategoriesInputEnvelope>;
};

export type TechCreateOrConnectWithoutTech_CategoriesInput = {
  create: TechCreateWithoutTech_CategoriesInput;
  where: TechWhereUniqueInput;
};

export type TechCreateWithoutTech_CategoriesInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type TechListRelationFilter = {
  every?: Maybe<TechWhereInput>;
  none?: Maybe<TechWhereInput>;
  some?: Maybe<TechWhereInput>;
};

export type TechOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type TechOrderByWithRelationInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  tech_categories?: Maybe<TechCategoryOrderByWithRelationInput>;
  tech_category_id?: Maybe<SortOrder>;
};

export enum TechScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  TechCategoryId = 'tech_category_id'
}

export type TechScalarWhereInput = {
  AND?: Maybe<Array<TechScalarWhereInput>>;
  NOT?: Maybe<Array<TechScalarWhereInput>>;
  OR?: Maybe<Array<TechScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  tech_category_id?: Maybe<StringFilter>;
};

export type TechUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  tech_categories?: Maybe<TechCategoryUpdateOneRequiredWithoutTechsInput>;
};

export type TechUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TechUpdateManyWithWhereWithoutTech_CategoriesInput = {
  data: TechUpdateManyMutationInput;
  where: TechScalarWhereInput;
};

export type TechUpdateManyWithoutTech_CategoriesInput = {
  connect?: Maybe<Array<TechWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TechCreateOrConnectWithoutTech_CategoriesInput>>;
  create?: Maybe<Array<TechCreateWithoutTech_CategoriesInput>>;
  createMany?: Maybe<TechCreateManyTech_CategoriesInputEnvelope>;
  delete?: Maybe<Array<TechWhereUniqueInput>>;
  deleteMany?: Maybe<Array<TechScalarWhereInput>>;
  disconnect?: Maybe<Array<TechWhereUniqueInput>>;
  set?: Maybe<Array<TechWhereUniqueInput>>;
  update?: Maybe<Array<TechUpdateWithWhereUniqueWithoutTech_CategoriesInput>>;
  updateMany?: Maybe<Array<TechUpdateManyWithWhereWithoutTech_CategoriesInput>>;
  upsert?: Maybe<Array<TechUpsertWithWhereUniqueWithoutTech_CategoriesInput>>;
};

export type TechUpdateWithWhereUniqueWithoutTech_CategoriesInput = {
  data: TechUpdateWithoutTech_CategoriesInput;
  where: TechWhereUniqueInput;
};

export type TechUpdateWithoutTech_CategoriesInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TechUpsertWithWhereUniqueWithoutTech_CategoriesInput = {
  create: TechCreateWithoutTech_CategoriesInput;
  update: TechUpdateWithoutTech_CategoriesInput;
  where: TechWhereUniqueInput;
};

export type TechWhereInput = {
  AND?: Maybe<Array<TechWhereInput>>;
  NOT?: Maybe<Array<TechWhereInput>>;
  OR?: Maybe<Array<TechWhereInput>>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  tech_categories?: Maybe<TechCategoryRelationFilter>;
  tech_category_id?: Maybe<StringFilter>;
};

export type TechWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};


export type DeleteFileMutationVariables = Exact<{
  filename: Scalars['String'];
}>;


export type DeleteFileMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteFile'>
);

export type ConfirmEmailMutationVariables = Exact<{
  code: Scalars['Int'];
  email: Scalars['String'];
}>;


export type ConfirmEmailMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'confirmEmail'>
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login?: Maybe<(
    { __typename?: 'LoginReturnType' }
    & Pick<LoginReturnType, 'token'>
  )> }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type SubmitAdminMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  fname: Scalars['String'];
  lname: Scalars['String'];
  linkedIn: Scalars['String'];
  whatsapp: Scalars['String'];
  instagram: Scalars['String'];
  github: Scalars['String'];
  heroImage: Scalars['String'];
  resumes: Array<Scalars['String']> | Scalars['String'];
}>;


export type SubmitAdminMutation = (
  { __typename?: 'Mutation' }
  & { createAdmin?: Maybe<(
    { __typename?: 'Admin' }
    & Pick<Admin, 'id' | 'email' | 'fname' | 'lname' | 'resumes'>
  )> }
);

export type UploadFileMutationVariables = Exact<{
  file: Scalars['Upload'];
  isEdit?: Maybe<Scalars['Boolean']>;
}>;


export type UploadFileMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'uploadSingleFile'>
);

export type UploadFilesMutationVariables = Exact<{
  files: Array<Scalars['Upload']> | Scalars['Upload'];
}>;


export type UploadFilesMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'uploadMultipleFiles'>
);

export type CreateStackMutationVariables = Exact<{
  image: Scalars['String'];
  title: Scalars['String'];
  email: Scalars['String'];
}>;


export type CreateStackMutation = (
  { __typename?: 'Mutation' }
  & { createStack: (
    { __typename?: 'Stack' }
    & Pick<Stack, 'id'>
  ) }
);

export type CreateProjectWithRelationsMutationVariables = Exact<{
  name: Scalars['String'];
  summary: Scalars['String'];
  image: Scalars['String'];
  github_url: Scalars['String'];
  app_url: Scalars['String'];
  type: Scalars['String'];
  techCategories: Array<TechCategoryCreateInput_Pwnr> | TechCategoryCreateInput_Pwnr;
  questions: Array<QuestionCreateInput_Pwnr> | QuestionCreateInput_Pwnr;
  sketches: Array<SketchCreateInput_Pwnr> | SketchCreateInput_Pwnr;
}>;


export type CreateProjectWithRelationsMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createProjectWithNestedRelations'>
);

export type CreateProjectMutationVariables = Exact<{
  for?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  image: Scalars['String'];
  type: Scalars['String'];
  github_url: Scalars['String'];
  app_url: Scalars['String'];
  summary: Scalars['String'];
}>;


export type CreateProjectMutation = (
  { __typename?: 'Mutation' }
  & { createProject: (
    { __typename?: 'Project' }
    & Pick<Project, 'id' | 'name' | 'image' | 'type' | 'github_url' | 'app_url' | 'summary'>
  ) }
);

export type CreateManySketchesMutationVariables = Exact<{
  data: Array<SketchCreateManyInput> | SketchCreateManyInput;
}>;


export type CreateManySketchesMutation = (
  { __typename?: 'Mutation' }
  & { createManySketch: (
    { __typename?: 'AffectedRowsOutput' }
    & Pick<AffectedRowsOutput, 'count'>
  ) }
);

export type CreateSketchMutationVariables = Exact<{
  projectId: Scalars['String'];
  summary: Scalars['String'];
  description: Scalars['String'];
  download_link: Scalars['String'];
  image: Scalars['String'];
  title: Scalars['String'];
}>;


export type CreateSketchMutation = (
  { __typename?: 'Mutation' }
  & { createSketch: (
    { __typename?: 'Sketch' }
    & Pick<Sketch, 'id' | 'title' | 'summary' | 'description' | 'download_link' | 'image' | 'project_id'>
  ) }
);

export type CreateTechCategoryMutationVariables = Exact<{
  name: Scalars['String'];
  projectId: Scalars['String'];
}>;


export type CreateTechCategoryMutation = (
  { __typename?: 'Mutation' }
  & { createTechCategory: (
    { __typename?: 'TechCategory' }
    & Pick<TechCategory, 'id' | 'name'>
  ) }
);

export type CreateTechMutationVariables = Exact<{
  name: Scalars['String'];
  techCategoryId: Scalars['String'];
}>;


export type CreateTechMutation = (
  { __typename?: 'Mutation' }
  & { createTech: (
    { __typename?: 'Tech' }
    & Pick<Tech, 'id' | 'name'>
  ) }
);

export type CreateQuestionMutationVariables = Exact<{
  question: Scalars['String'];
  answer: Scalars['String'];
  projectId: Scalars['String'];
}>;


export type CreateQuestionMutation = (
  { __typename?: 'Mutation' }
  & { createQuestion: (
    { __typename?: 'Question' }
    & Pick<Question, 'id' | 'question' | 'answer'>
  ) }
);

export type UpdateStackMutationVariables = Exact<{
  id: Scalars['String'];
  image: Scalars['String'];
  title: Scalars['String'];
}>;


export type UpdateStackMutation = (
  { __typename?: 'Mutation' }
  & { updateStack?: Maybe<(
    { __typename?: 'Stack' }
    & Pick<Stack, 'id'>
  )> }
);

export type UpdateProjectSummaryMutationVariables = Exact<{
  id: Scalars['String'];
  summary?: Maybe<Scalars['String']>;
}>;


export type UpdateProjectSummaryMutation = (
  { __typename?: 'Mutation' }
  & { updateProject?: Maybe<(
    { __typename?: 'Project' }
    & Pick<Project, 'summary'>
  )> }
);

export type UpdateProjectTypeMutationVariables = Exact<{
  id: Scalars['String'];
  type?: Maybe<Scalars['String']>;
}>;


export type UpdateProjectTypeMutation = (
  { __typename?: 'Mutation' }
  & { updateProject?: Maybe<(
    { __typename?: 'Project' }
    & Pick<Project, 'type'>
  )> }
);

export type UpdateImageMutationVariables = Exact<{
  file: Scalars['Upload'];
  id: Scalars['String'];
  prevname: Scalars['String'];
  field?: Maybe<Scalars['String']>;
}>;


export type UpdateImageMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updateImage'>
);

export type UpdateProjectAppUrlMutationVariables = Exact<{
  id: Scalars['String'];
  app_url?: Maybe<Scalars['String']>;
}>;


export type UpdateProjectAppUrlMutation = (
  { __typename?: 'Mutation' }
  & { updateProject?: Maybe<(
    { __typename?: 'Project' }
    & Pick<Project, 'app_url'>
  )> }
);

export type UpdateProjectGitHubUrlMutationVariables = Exact<{
  id: Scalars['String'];
  github_url: Scalars['String'];
}>;


export type UpdateProjectGitHubUrlMutation = (
  { __typename?: 'Mutation' }
  & { updateProject?: Maybe<(
    { __typename?: 'Project' }
    & Pick<Project, 'github_url'>
  )> }
);

export type UpdateProjectNameMutationVariables = Exact<{
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
}>;


export type UpdateProjectNameMutation = (
  { __typename?: 'Mutation' }
  & { updateProject?: Maybe<(
    { __typename?: 'Project' }
    & Pick<Project, 'name'>
  )> }
);

export type UpdateSketchDescriptionMutationVariables = Exact<{
  id: Scalars['String'];
  description: Scalars['String'];
}>;


export type UpdateSketchDescriptionMutation = (
  { __typename?: 'Mutation' }
  & { updateSketch?: Maybe<(
    { __typename?: 'Sketch' }
    & Pick<Sketch, 'id' | 'title' | 'description' | 'summary' | 'image' | 'download_link'>
  )> }
);

export type UpdateSketchImageMutationVariables = Exact<{
  id: Scalars['String'];
  image: Scalars['String'];
}>;


export type UpdateSketchImageMutation = (
  { __typename?: 'Mutation' }
  & { updateSketch?: Maybe<(
    { __typename?: 'Sketch' }
    & Pick<Sketch, 'id' | 'title' | 'description' | 'summary' | 'image' | 'download_link'>
  )> }
);

export type UpdateSketchDownloadLinkMutationVariables = Exact<{
  id: Scalars['String'];
  download_link: Scalars['String'];
}>;


export type UpdateSketchDownloadLinkMutation = (
  { __typename?: 'Mutation' }
  & { updateSketch?: Maybe<(
    { __typename?: 'Sketch' }
    & Pick<Sketch, 'id' | 'title' | 'description' | 'summary' | 'image' | 'download_link'>
  )> }
);

export type UpdateSketchSummaryMutationVariables = Exact<{
  id: Scalars['String'];
  summary: Scalars['String'];
}>;


export type UpdateSketchSummaryMutation = (
  { __typename?: 'Mutation' }
  & { updateSketch?: Maybe<(
    { __typename?: 'Sketch' }
    & Pick<Sketch, 'id' | 'title' | 'description' | 'summary' | 'image' | 'download_link'>
  )> }
);

export type UpdateTechCategoryMutationVariables = Exact<{
  name: Scalars['String'];
  techCategoryId: Scalars['String'];
}>;


export type UpdateTechCategoryMutation = (
  { __typename?: 'Mutation' }
  & { updateTechCategory?: Maybe<(
    { __typename?: 'TechCategory' }
    & Pick<TechCategory, 'id' | 'name'>
    & { techs: Array<(
      { __typename?: 'Tech' }
      & Pick<Tech, 'id' | 'name'>
    )> }
  )> }
);

export type UpdateQuestionMutationVariables = Exact<{
  id: Scalars['String'];
  question: Scalars['String'];
  answer: Scalars['String'];
}>;


export type UpdateQuestionMutation = (
  { __typename?: 'Mutation' }
  & { updateQuestion?: Maybe<(
    { __typename?: 'Question' }
    & Pick<Question, 'id' | 'question' | 'answer'>
  )> }
);

export type DeletestackMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeletestackMutation = (
  { __typename?: 'Mutation' }
  & { deleteStack?: Maybe<(
    { __typename?: 'Stack' }
    & Pick<Stack, 'id'>
  )> }
);

export type DeleteProjectMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteProjectMutation = (
  { __typename?: 'Mutation' }
  & { deleteProject?: Maybe<(
    { __typename?: 'Project' }
    & Pick<Project, 'id'>
  )> }
);

export type DeleteSketchMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteSketchMutation = (
  { __typename?: 'Mutation' }
  & { deleteSketch?: Maybe<(
    { __typename?: 'Sketch' }
    & Pick<Sketch, 'id'>
  )> }
);

export type DeleteTechCategoryMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteTechCategoryMutation = (
  { __typename?: 'Mutation' }
  & { deleteTechCategory?: Maybe<(
    { __typename?: 'TechCategory' }
    & Pick<TechCategory, 'id'>
  )> }
);

export type DeleteTechMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteTechMutation = (
  { __typename?: 'Mutation' }
  & { deleteTech?: Maybe<(
    { __typename?: 'Tech' }
    & Pick<Tech, 'id'>
  )> }
);

export type DeleteQuestionMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteQuestionMutation = (
  { __typename?: 'Mutation' }
  & { deleteQuestion?: Maybe<(
    { __typename?: 'Question' }
    & Pick<Question, 'id'>
  )> }
);

export type IsThereAdminQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type IsThereAdminQueryQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'isThereAnAdmin'>
);

export type QuerySingleProjectWithRelationsQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type QuerySingleProjectWithRelationsQuery = (
  { __typename?: 'Query' }
  & { project?: Maybe<(
    { __typename?: 'Project' }
    & Pick<Project, 'id' | 'name' | 'app_url' | 'github_url' | 'image' | 'type' | 'summary'>
    & { questions: Array<(
      { __typename?: 'Question' }
      & Pick<Question, 'id' | 'question' | 'answer'>
    )>, sketches: Array<(
      { __typename?: 'Sketch' }
      & Pick<Sketch, 'id' | 'title' | 'description' | 'summary' | 'download_link' | 'image'>
    )>, tech_categories: Array<(
      { __typename?: 'TechCategory' }
      & Pick<TechCategory, 'id' | 'name'>
      & { techs: Array<(
        { __typename?: 'Tech' }
        & Pick<Tech, 'id' | 'name'>
      )> }
    )> }
  )> }
);

export type QueryProjectsWithRelationsQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryProjectsWithRelationsQuery = (
  { __typename?: 'Query' }
  & { projects: Array<(
    { __typename?: 'Project' }
    & Pick<Project, 'id' | 'name' | 'app_url' | 'github_url' | 'image' | 'type' | 'summary'>
    & { questions: Array<(
      { __typename?: 'Question' }
      & Pick<Question, 'id' | 'question' | 'answer'>
    )>, sketches: Array<(
      { __typename?: 'Sketch' }
      & Pick<Sketch, 'id' | 'title' | 'description' | 'summary' | 'download_link' | 'image'>
    )>, tech_categories: Array<(
      { __typename?: 'TechCategory' }
      & Pick<TechCategory, 'id' | 'name'>
      & { techs: Array<(
        { __typename?: 'Tech' }
        & Pick<Tech, 'id' | 'name'>
      )> }
    )> }
  )> }
);

export type QueryProjectsWithTechCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryProjectsWithTechCategoriesQuery = (
  { __typename?: 'Query' }
  & { projects: Array<(
    { __typename?: 'Project' }
    & Pick<Project, 'app_url' | 'github_url' | 'id' | 'image' | 'name' | 'summary' | 'type'>
    & { tech_categories: Array<(
      { __typename?: 'TechCategory' }
      & Pick<TechCategory, 'name' | 'id'>
      & { techs: Array<(
        { __typename?: 'Tech' }
        & Pick<Tech, 'name' | 'id'>
      )> }
    )> }
  )> }
);

export type QueryProjectsWithoutRelationsQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryProjectsWithoutRelationsQuery = (
  { __typename?: 'Query' }
  & { projects: Array<(
    { __typename?: 'Project' }
    & Pick<Project, 'app_url' | 'github_url' | 'id' | 'image' | 'name' | 'summary' | 'type'>
  )> }
);

export type QueryMessagesQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryMessagesQuery = (
  { __typename?: 'Query' }
  & { messages: Array<(
    { __typename?: 'Message' }
    & Pick<Message, 'answer_status' | 'answeredAt' | 'body' | 'createdAd' | 'from' | 'id' | 'read_status' | 'subject'>
  )> }
);

export type QueryStacksQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryStacksQuery = (
  { __typename?: 'Query' }
  & { stacks: Array<(
    { __typename?: 'Stack' }
    & Pick<Stack, 'id' | 'title' | 'image'>
  )> }
);

export type QueryDashboardStuffQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryDashboardStuffQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'Admin' }
    & Pick<Admin, 'email'>
  )>, stacks: Array<(
    { __typename?: 'Stack' }
    & Pick<Stack, 'id' | 'title' | 'image'>
  )>, messages: Array<(
    { __typename?: 'Message' }
    & Pick<Message, 'answer_status' | 'answeredAt' | 'body' | 'createdAd' | 'from' | 'id' | 'read_status' | 'subject'>
  )>, projects: Array<(
    { __typename?: 'Project' }
    & Pick<Project, 'app_url' | 'github_url' | 'id' | 'image' | 'name' | 'summary' | 'type'>
    & { tech_categories: Array<(
      { __typename?: 'TechCategory' }
      & Pick<TechCategory, 'name' | 'id'>
      & { techs: Array<(
        { __typename?: 'Tech' }
        & Pick<Tech, 'name' | 'id'>
      )> }
    )> }
  )> }
);


export const DeleteFileDocument = gql`
    mutation DeleteFile($filename: String!) {
  deleteFile(filename: $filename)
}
    `;
export type DeleteFileMutationFn = Apollo.MutationFunction<DeleteFileMutation, DeleteFileMutationVariables>;

/**
 * __useDeleteFileMutation__
 *
 * To run a mutation, you first call `useDeleteFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFileMutation, { data, loading, error }] = useDeleteFileMutation({
 *   variables: {
 *      filename: // value for 'filename'
 *   },
 * });
 */
export function useDeleteFileMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFileMutation, DeleteFileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFileMutation, DeleteFileMutationVariables>(DeleteFileDocument, options);
      }
export type DeleteFileMutationHookResult = ReturnType<typeof useDeleteFileMutation>;
export type DeleteFileMutationResult = Apollo.MutationResult<DeleteFileMutation>;
export type DeleteFileMutationOptions = Apollo.BaseMutationOptions<DeleteFileMutation, DeleteFileMutationVariables>;
export const ConfirmEmailDocument = gql`
    mutation ConfirmEmail($code: Int!, $email: String!) {
  confirmEmail(code: $code, email: $email)
}
    `;
export type ConfirmEmailMutationFn = Apollo.MutationFunction<ConfirmEmailMutation, ConfirmEmailMutationVariables>;

/**
 * __useConfirmEmailMutation__
 *
 * To run a mutation, you first call `useConfirmEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmEmailMutation, { data, loading, error }] = useConfirmEmailMutation({
 *   variables: {
 *      code: // value for 'code'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useConfirmEmailMutation(baseOptions?: Apollo.MutationHookOptions<ConfirmEmailMutation, ConfirmEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfirmEmailMutation, ConfirmEmailMutationVariables>(ConfirmEmailDocument, options);
      }
export type ConfirmEmailMutationHookResult = ReturnType<typeof useConfirmEmailMutation>;
export type ConfirmEmailMutationResult = Apollo.MutationResult<ConfirmEmailMutation>;
export type ConfirmEmailMutationOptions = Apollo.BaseMutationOptions<ConfirmEmailMutation, ConfirmEmailMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(data: {email: $email, password: $password}) {
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const SubmitAdminDocument = gql`
    mutation SubmitAdmin($email: String!, $password: String!, $fname: String!, $lname: String!, $linkedIn: String!, $whatsapp: String!, $instagram: String!, $github: String!, $heroImage: String!, $resumes: [String!]!) {
  createAdmin(
    data: {email: $email, password: $password, fname: $fname, lname: $lname, linkedIn: $linkedIn, whatsapp: $whatsapp, instagram: $instagram, github: $github, heroImage: $heroImage, resumes: {set: $resumes}}
  ) {
    id
    email
    fname
    lname
    resumes
  }
}
    `;
export type SubmitAdminMutationFn = Apollo.MutationFunction<SubmitAdminMutation, SubmitAdminMutationVariables>;

/**
 * __useSubmitAdminMutation__
 *
 * To run a mutation, you first call `useSubmitAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitAdminMutation, { data, loading, error }] = useSubmitAdminMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      fname: // value for 'fname'
 *      lname: // value for 'lname'
 *      linkedIn: // value for 'linkedIn'
 *      whatsapp: // value for 'whatsapp'
 *      instagram: // value for 'instagram'
 *      github: // value for 'github'
 *      heroImage: // value for 'heroImage'
 *      resumes: // value for 'resumes'
 *   },
 * });
 */
export function useSubmitAdminMutation(baseOptions?: Apollo.MutationHookOptions<SubmitAdminMutation, SubmitAdminMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitAdminMutation, SubmitAdminMutationVariables>(SubmitAdminDocument, options);
      }
export type SubmitAdminMutationHookResult = ReturnType<typeof useSubmitAdminMutation>;
export type SubmitAdminMutationResult = Apollo.MutationResult<SubmitAdminMutation>;
export type SubmitAdminMutationOptions = Apollo.BaseMutationOptions<SubmitAdminMutation, SubmitAdminMutationVariables>;
export const UploadFileDocument = gql`
    mutation UploadFile($file: Upload!, $isEdit: Boolean = false) {
  uploadSingleFile(file: $file, isEdit: $isEdit)
}
    `;
export type UploadFileMutationFn = Apollo.MutationFunction<UploadFileMutation, UploadFileMutationVariables>;

/**
 * __useUploadFileMutation__
 *
 * To run a mutation, you first call `useUploadFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadFileMutation, { data, loading, error }] = useUploadFileMutation({
 *   variables: {
 *      file: // value for 'file'
 *      isEdit: // value for 'isEdit'
 *   },
 * });
 */
export function useUploadFileMutation(baseOptions?: Apollo.MutationHookOptions<UploadFileMutation, UploadFileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadFileMutation, UploadFileMutationVariables>(UploadFileDocument, options);
      }
export type UploadFileMutationHookResult = ReturnType<typeof useUploadFileMutation>;
export type UploadFileMutationResult = Apollo.MutationResult<UploadFileMutation>;
export type UploadFileMutationOptions = Apollo.BaseMutationOptions<UploadFileMutation, UploadFileMutationVariables>;
export const UploadFilesDocument = gql`
    mutation UploadFiles($files: [Upload!]!) {
  uploadMultipleFiles(files: $files)
}
    `;
export type UploadFilesMutationFn = Apollo.MutationFunction<UploadFilesMutation, UploadFilesMutationVariables>;

/**
 * __useUploadFilesMutation__
 *
 * To run a mutation, you first call `useUploadFilesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadFilesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadFilesMutation, { data, loading, error }] = useUploadFilesMutation({
 *   variables: {
 *      files: // value for 'files'
 *   },
 * });
 */
export function useUploadFilesMutation(baseOptions?: Apollo.MutationHookOptions<UploadFilesMutation, UploadFilesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadFilesMutation, UploadFilesMutationVariables>(UploadFilesDocument, options);
      }
export type UploadFilesMutationHookResult = ReturnType<typeof useUploadFilesMutation>;
export type UploadFilesMutationResult = Apollo.MutationResult<UploadFilesMutation>;
export type UploadFilesMutationOptions = Apollo.BaseMutationOptions<UploadFilesMutation, UploadFilesMutationVariables>;
export const CreateStackDocument = gql`
    mutation CreateStack($image: String!, $title: String!, $email: String!) {
  createStack(
    data: {title: $title, image: $image, admin: {connect: {email: $email}}}
  ) {
    id
  }
}
    `;
export type CreateStackMutationFn = Apollo.MutationFunction<CreateStackMutation, CreateStackMutationVariables>;

/**
 * __useCreateStackMutation__
 *
 * To run a mutation, you first call `useCreateStackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStackMutation, { data, loading, error }] = useCreateStackMutation({
 *   variables: {
 *      image: // value for 'image'
 *      title: // value for 'title'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useCreateStackMutation(baseOptions?: Apollo.MutationHookOptions<CreateStackMutation, CreateStackMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateStackMutation, CreateStackMutationVariables>(CreateStackDocument, options);
      }
export type CreateStackMutationHookResult = ReturnType<typeof useCreateStackMutation>;
export type CreateStackMutationResult = Apollo.MutationResult<CreateStackMutation>;
export type CreateStackMutationOptions = Apollo.BaseMutationOptions<CreateStackMutation, CreateStackMutationVariables>;
export const CreateProjectWithRelationsDocument = gql`
    mutation CreateProjectWithRelations($name: String!, $summary: String!, $image: String!, $github_url: String!, $app_url: String!, $type: String!, $techCategories: [TechCategoryCreateInput_PWNR!]!, $questions: [QuestionCreateInput_PWNR!]!, $sketches: [SketchCreateInput_PWNR!]!) {
  createProjectWithNestedRelations(
    data: {name: $name, summary: $summary, type: $type, image: $image, github_url: $github_url, app_url: $app_url, techCategories: $techCategories, questions: $questions, sketches: $sketches}
  )
}
    `;
export type CreateProjectWithRelationsMutationFn = Apollo.MutationFunction<CreateProjectWithRelationsMutation, CreateProjectWithRelationsMutationVariables>;

/**
 * __useCreateProjectWithRelationsMutation__
 *
 * To run a mutation, you first call `useCreateProjectWithRelationsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProjectWithRelationsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProjectWithRelationsMutation, { data, loading, error }] = useCreateProjectWithRelationsMutation({
 *   variables: {
 *      name: // value for 'name'
 *      summary: // value for 'summary'
 *      image: // value for 'image'
 *      github_url: // value for 'github_url'
 *      app_url: // value for 'app_url'
 *      type: // value for 'type'
 *      techCategories: // value for 'techCategories'
 *      questions: // value for 'questions'
 *      sketches: // value for 'sketches'
 *   },
 * });
 */
export function useCreateProjectWithRelationsMutation(baseOptions?: Apollo.MutationHookOptions<CreateProjectWithRelationsMutation, CreateProjectWithRelationsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProjectWithRelationsMutation, CreateProjectWithRelationsMutationVariables>(CreateProjectWithRelationsDocument, options);
      }
export type CreateProjectWithRelationsMutationHookResult = ReturnType<typeof useCreateProjectWithRelationsMutation>;
export type CreateProjectWithRelationsMutationResult = Apollo.MutationResult<CreateProjectWithRelationsMutation>;
export type CreateProjectWithRelationsMutationOptions = Apollo.BaseMutationOptions<CreateProjectWithRelationsMutation, CreateProjectWithRelationsMutationVariables>;
export const CreateProjectDocument = gql`
    mutation CreateProject($for: String, $name: String!, $image: String!, $type: String!, $github_url: String!, $app_url: String!, $summary: String!) {
  createProject(
    data: {name: $name, image: $image, type: $type, github_url: $github_url, app_url: $app_url, summary: $summary, admin: {connect: {email: $for}}}
  ) {
    id
    name
    image
    type
    github_url
    app_url
    summary
  }
}
    `;
export type CreateProjectMutationFn = Apollo.MutationFunction<CreateProjectMutation, CreateProjectMutationVariables>;

/**
 * __useCreateProjectMutation__
 *
 * To run a mutation, you first call `useCreateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProjectMutation, { data, loading, error }] = useCreateProjectMutation({
 *   variables: {
 *      for: // value for 'for'
 *      name: // value for 'name'
 *      image: // value for 'image'
 *      type: // value for 'type'
 *      github_url: // value for 'github_url'
 *      app_url: // value for 'app_url'
 *      summary: // value for 'summary'
 *   },
 * });
 */
export function useCreateProjectMutation(baseOptions?: Apollo.MutationHookOptions<CreateProjectMutation, CreateProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProjectMutation, CreateProjectMutationVariables>(CreateProjectDocument, options);
      }
export type CreateProjectMutationHookResult = ReturnType<typeof useCreateProjectMutation>;
export type CreateProjectMutationResult = Apollo.MutationResult<CreateProjectMutation>;
export type CreateProjectMutationOptions = Apollo.BaseMutationOptions<CreateProjectMutation, CreateProjectMutationVariables>;
export const CreateManySketchesDocument = gql`
    mutation CreateManySketches($data: [SketchCreateManyInput!]!) {
  createManySketch(data: $data) {
    count
  }
}
    `;
export type CreateManySketchesMutationFn = Apollo.MutationFunction<CreateManySketchesMutation, CreateManySketchesMutationVariables>;

/**
 * __useCreateManySketchesMutation__
 *
 * To run a mutation, you first call `useCreateManySketchesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateManySketchesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createManySketchesMutation, { data, loading, error }] = useCreateManySketchesMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateManySketchesMutation(baseOptions?: Apollo.MutationHookOptions<CreateManySketchesMutation, CreateManySketchesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateManySketchesMutation, CreateManySketchesMutationVariables>(CreateManySketchesDocument, options);
      }
export type CreateManySketchesMutationHookResult = ReturnType<typeof useCreateManySketchesMutation>;
export type CreateManySketchesMutationResult = Apollo.MutationResult<CreateManySketchesMutation>;
export type CreateManySketchesMutationOptions = Apollo.BaseMutationOptions<CreateManySketchesMutation, CreateManySketchesMutationVariables>;
export const CreateSketchDocument = gql`
    mutation CreateSketch($projectId: String!, $summary: String!, $description: String!, $download_link: String!, $image: String!, $title: String!) {
  createSketch(
    data: {title: $title, description: $description, summary: $summary, download_link: $download_link, image: $image, project: {connect: {id: $projectId}}}
  ) {
    id
    title
    summary
    description
    download_link
    image
    project_id
  }
}
    `;
export type CreateSketchMutationFn = Apollo.MutationFunction<CreateSketchMutation, CreateSketchMutationVariables>;

/**
 * __useCreateSketchMutation__
 *
 * To run a mutation, you first call `useCreateSketchMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSketchMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSketchMutation, { data, loading, error }] = useCreateSketchMutation({
 *   variables: {
 *      projectId: // value for 'projectId'
 *      summary: // value for 'summary'
 *      description: // value for 'description'
 *      download_link: // value for 'download_link'
 *      image: // value for 'image'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useCreateSketchMutation(baseOptions?: Apollo.MutationHookOptions<CreateSketchMutation, CreateSketchMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSketchMutation, CreateSketchMutationVariables>(CreateSketchDocument, options);
      }
export type CreateSketchMutationHookResult = ReturnType<typeof useCreateSketchMutation>;
export type CreateSketchMutationResult = Apollo.MutationResult<CreateSketchMutation>;
export type CreateSketchMutationOptions = Apollo.BaseMutationOptions<CreateSketchMutation, CreateSketchMutationVariables>;
export const CreateTechCategoryDocument = gql`
    mutation CreateTechCategory($name: String!, $projectId: String!) {
  createTechCategory(data: {name: $name, project: {connect: {id: $projectId}}}) {
    id
    name
  }
}
    `;
export type CreateTechCategoryMutationFn = Apollo.MutationFunction<CreateTechCategoryMutation, CreateTechCategoryMutationVariables>;

/**
 * __useCreateTechCategoryMutation__
 *
 * To run a mutation, you first call `useCreateTechCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTechCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTechCategoryMutation, { data, loading, error }] = useCreateTechCategoryMutation({
 *   variables: {
 *      name: // value for 'name'
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function useCreateTechCategoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateTechCategoryMutation, CreateTechCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTechCategoryMutation, CreateTechCategoryMutationVariables>(CreateTechCategoryDocument, options);
      }
export type CreateTechCategoryMutationHookResult = ReturnType<typeof useCreateTechCategoryMutation>;
export type CreateTechCategoryMutationResult = Apollo.MutationResult<CreateTechCategoryMutation>;
export type CreateTechCategoryMutationOptions = Apollo.BaseMutationOptions<CreateTechCategoryMutation, CreateTechCategoryMutationVariables>;
export const CreateTechDocument = gql`
    mutation CreateTech($name: String!, $techCategoryId: String!) {
  createTech(
    data: {name: $name, tech_categories: {connect: {id: $techCategoryId}}}
  ) {
    id
    name
  }
}
    `;
export type CreateTechMutationFn = Apollo.MutationFunction<CreateTechMutation, CreateTechMutationVariables>;

/**
 * __useCreateTechMutation__
 *
 * To run a mutation, you first call `useCreateTechMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTechMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTechMutation, { data, loading, error }] = useCreateTechMutation({
 *   variables: {
 *      name: // value for 'name'
 *      techCategoryId: // value for 'techCategoryId'
 *   },
 * });
 */
export function useCreateTechMutation(baseOptions?: Apollo.MutationHookOptions<CreateTechMutation, CreateTechMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTechMutation, CreateTechMutationVariables>(CreateTechDocument, options);
      }
export type CreateTechMutationHookResult = ReturnType<typeof useCreateTechMutation>;
export type CreateTechMutationResult = Apollo.MutationResult<CreateTechMutation>;
export type CreateTechMutationOptions = Apollo.BaseMutationOptions<CreateTechMutation, CreateTechMutationVariables>;
export const CreateQuestionDocument = gql`
    mutation CreateQuestion($question: String!, $answer: String!, $projectId: String!) {
  createQuestion(
    data: {question: $question, answer: $answer, project: {connect: {id: $projectId}}}
  ) {
    id
    question
    answer
  }
}
    `;
export type CreateQuestionMutationFn = Apollo.MutationFunction<CreateQuestionMutation, CreateQuestionMutationVariables>;

/**
 * __useCreateQuestionMutation__
 *
 * To run a mutation, you first call `useCreateQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createQuestionMutation, { data, loading, error }] = useCreateQuestionMutation({
 *   variables: {
 *      question: // value for 'question'
 *      answer: // value for 'answer'
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function useCreateQuestionMutation(baseOptions?: Apollo.MutationHookOptions<CreateQuestionMutation, CreateQuestionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateQuestionMutation, CreateQuestionMutationVariables>(CreateQuestionDocument, options);
      }
export type CreateQuestionMutationHookResult = ReturnType<typeof useCreateQuestionMutation>;
export type CreateQuestionMutationResult = Apollo.MutationResult<CreateQuestionMutation>;
export type CreateQuestionMutationOptions = Apollo.BaseMutationOptions<CreateQuestionMutation, CreateQuestionMutationVariables>;
export const UpdateStackDocument = gql`
    mutation UpdateStack($id: String!, $image: String!, $title: String!) {
  updateStack(
    data: {title: {set: $title}, image: {set: $image}}
    where: {id: $id}
  ) {
    id
  }
}
    `;
export type UpdateStackMutationFn = Apollo.MutationFunction<UpdateStackMutation, UpdateStackMutationVariables>;

/**
 * __useUpdateStackMutation__
 *
 * To run a mutation, you first call `useUpdateStackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStackMutation, { data, loading, error }] = useUpdateStackMutation({
 *   variables: {
 *      id: // value for 'id'
 *      image: // value for 'image'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useUpdateStackMutation(baseOptions?: Apollo.MutationHookOptions<UpdateStackMutation, UpdateStackMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateStackMutation, UpdateStackMutationVariables>(UpdateStackDocument, options);
      }
export type UpdateStackMutationHookResult = ReturnType<typeof useUpdateStackMutation>;
export type UpdateStackMutationResult = Apollo.MutationResult<UpdateStackMutation>;
export type UpdateStackMutationOptions = Apollo.BaseMutationOptions<UpdateStackMutation, UpdateStackMutationVariables>;
export const UpdateProjectSummaryDocument = gql`
    mutation UpdateProjectSummary($id: String!, $summary: String) {
  updateProject(data: {summary: {set: $summary}}, where: {id: $id}) {
    summary
  }
}
    `;
export type UpdateProjectSummaryMutationFn = Apollo.MutationFunction<UpdateProjectSummaryMutation, UpdateProjectSummaryMutationVariables>;

/**
 * __useUpdateProjectSummaryMutation__
 *
 * To run a mutation, you first call `useUpdateProjectSummaryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProjectSummaryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProjectSummaryMutation, { data, loading, error }] = useUpdateProjectSummaryMutation({
 *   variables: {
 *      id: // value for 'id'
 *      summary: // value for 'summary'
 *   },
 * });
 */
export function useUpdateProjectSummaryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProjectSummaryMutation, UpdateProjectSummaryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProjectSummaryMutation, UpdateProjectSummaryMutationVariables>(UpdateProjectSummaryDocument, options);
      }
export type UpdateProjectSummaryMutationHookResult = ReturnType<typeof useUpdateProjectSummaryMutation>;
export type UpdateProjectSummaryMutationResult = Apollo.MutationResult<UpdateProjectSummaryMutation>;
export type UpdateProjectSummaryMutationOptions = Apollo.BaseMutationOptions<UpdateProjectSummaryMutation, UpdateProjectSummaryMutationVariables>;
export const UpdateProjectTypeDocument = gql`
    mutation UpdateProjectType($id: String!, $type: String) {
  updateProject(data: {type: {set: $type}}, where: {id: $id}) {
    type
  }
}
    `;
export type UpdateProjectTypeMutationFn = Apollo.MutationFunction<UpdateProjectTypeMutation, UpdateProjectTypeMutationVariables>;

/**
 * __useUpdateProjectTypeMutation__
 *
 * To run a mutation, you first call `useUpdateProjectTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProjectTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProjectTypeMutation, { data, loading, error }] = useUpdateProjectTypeMutation({
 *   variables: {
 *      id: // value for 'id'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useUpdateProjectTypeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProjectTypeMutation, UpdateProjectTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProjectTypeMutation, UpdateProjectTypeMutationVariables>(UpdateProjectTypeDocument, options);
      }
export type UpdateProjectTypeMutationHookResult = ReturnType<typeof useUpdateProjectTypeMutation>;
export type UpdateProjectTypeMutationResult = Apollo.MutationResult<UpdateProjectTypeMutation>;
export type UpdateProjectTypeMutationOptions = Apollo.BaseMutationOptions<UpdateProjectTypeMutation, UpdateProjectTypeMutationVariables>;
export const UpdateImageDocument = gql`
    mutation UpdateImage($file: Upload!, $id: String!, $prevname: String!, $field: String) {
  updateImage(
    file: $file
    id: $id
    prevname: $prevname
    field: $field
    isEdit: true
  )
}
    `;
export type UpdateImageMutationFn = Apollo.MutationFunction<UpdateImageMutation, UpdateImageMutationVariables>;

/**
 * __useUpdateImageMutation__
 *
 * To run a mutation, you first call `useUpdateImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateImageMutation, { data, loading, error }] = useUpdateImageMutation({
 *   variables: {
 *      file: // value for 'file'
 *      id: // value for 'id'
 *      prevname: // value for 'prevname'
 *      field: // value for 'field'
 *   },
 * });
 */
export function useUpdateImageMutation(baseOptions?: Apollo.MutationHookOptions<UpdateImageMutation, UpdateImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateImageMutation, UpdateImageMutationVariables>(UpdateImageDocument, options);
      }
export type UpdateImageMutationHookResult = ReturnType<typeof useUpdateImageMutation>;
export type UpdateImageMutationResult = Apollo.MutationResult<UpdateImageMutation>;
export type UpdateImageMutationOptions = Apollo.BaseMutationOptions<UpdateImageMutation, UpdateImageMutationVariables>;
export const UpdateProjectAppUrlDocument = gql`
    mutation UpdateProjectAppUrl($id: String!, $app_url: String) {
  updateProject(data: {app_url: {set: $app_url}}, where: {id: $id}) {
    app_url
  }
}
    `;
export type UpdateProjectAppUrlMutationFn = Apollo.MutationFunction<UpdateProjectAppUrlMutation, UpdateProjectAppUrlMutationVariables>;

/**
 * __useUpdateProjectAppUrlMutation__
 *
 * To run a mutation, you first call `useUpdateProjectAppUrlMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProjectAppUrlMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProjectAppUrlMutation, { data, loading, error }] = useUpdateProjectAppUrlMutation({
 *   variables: {
 *      id: // value for 'id'
 *      app_url: // value for 'app_url'
 *   },
 * });
 */
export function useUpdateProjectAppUrlMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProjectAppUrlMutation, UpdateProjectAppUrlMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProjectAppUrlMutation, UpdateProjectAppUrlMutationVariables>(UpdateProjectAppUrlDocument, options);
      }
export type UpdateProjectAppUrlMutationHookResult = ReturnType<typeof useUpdateProjectAppUrlMutation>;
export type UpdateProjectAppUrlMutationResult = Apollo.MutationResult<UpdateProjectAppUrlMutation>;
export type UpdateProjectAppUrlMutationOptions = Apollo.BaseMutationOptions<UpdateProjectAppUrlMutation, UpdateProjectAppUrlMutationVariables>;
export const UpdateProjectGitHubUrlDocument = gql`
    mutation UpdateProjectGitHubUrl($id: String!, $github_url: String!) {
  updateProject(data: {github_url: {set: $github_url}}, where: {id: $id}) {
    github_url
  }
}
    `;
export type UpdateProjectGitHubUrlMutationFn = Apollo.MutationFunction<UpdateProjectGitHubUrlMutation, UpdateProjectGitHubUrlMutationVariables>;

/**
 * __useUpdateProjectGitHubUrlMutation__
 *
 * To run a mutation, you first call `useUpdateProjectGitHubUrlMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProjectGitHubUrlMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProjectGitHubUrlMutation, { data, loading, error }] = useUpdateProjectGitHubUrlMutation({
 *   variables: {
 *      id: // value for 'id'
 *      github_url: // value for 'github_url'
 *   },
 * });
 */
export function useUpdateProjectGitHubUrlMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProjectGitHubUrlMutation, UpdateProjectGitHubUrlMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProjectGitHubUrlMutation, UpdateProjectGitHubUrlMutationVariables>(UpdateProjectGitHubUrlDocument, options);
      }
export type UpdateProjectGitHubUrlMutationHookResult = ReturnType<typeof useUpdateProjectGitHubUrlMutation>;
export type UpdateProjectGitHubUrlMutationResult = Apollo.MutationResult<UpdateProjectGitHubUrlMutation>;
export type UpdateProjectGitHubUrlMutationOptions = Apollo.BaseMutationOptions<UpdateProjectGitHubUrlMutation, UpdateProjectGitHubUrlMutationVariables>;
export const UpdateProjectNameDocument = gql`
    mutation UpdateProjectName($id: String!, $name: String) {
  updateProject(data: {name: {set: $name}}, where: {id: $id}) {
    name
  }
}
    `;
export type UpdateProjectNameMutationFn = Apollo.MutationFunction<UpdateProjectNameMutation, UpdateProjectNameMutationVariables>;

/**
 * __useUpdateProjectNameMutation__
 *
 * To run a mutation, you first call `useUpdateProjectNameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProjectNameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProjectNameMutation, { data, loading, error }] = useUpdateProjectNameMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdateProjectNameMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProjectNameMutation, UpdateProjectNameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProjectNameMutation, UpdateProjectNameMutationVariables>(UpdateProjectNameDocument, options);
      }
export type UpdateProjectNameMutationHookResult = ReturnType<typeof useUpdateProjectNameMutation>;
export type UpdateProjectNameMutationResult = Apollo.MutationResult<UpdateProjectNameMutation>;
export type UpdateProjectNameMutationOptions = Apollo.BaseMutationOptions<UpdateProjectNameMutation, UpdateProjectNameMutationVariables>;
export const UpdateSketchDescriptionDocument = gql`
    mutation UpdateSketchDescription($id: String!, $description: String!) {
  updateSketch(data: {description: {set: $description}}, where: {id: $id}) {
    id
    title
    description
    summary
    image
    download_link
  }
}
    `;
export type UpdateSketchDescriptionMutationFn = Apollo.MutationFunction<UpdateSketchDescriptionMutation, UpdateSketchDescriptionMutationVariables>;

/**
 * __useUpdateSketchDescriptionMutation__
 *
 * To run a mutation, you first call `useUpdateSketchDescriptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSketchDescriptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSketchDescriptionMutation, { data, loading, error }] = useUpdateSketchDescriptionMutation({
 *   variables: {
 *      id: // value for 'id'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useUpdateSketchDescriptionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSketchDescriptionMutation, UpdateSketchDescriptionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSketchDescriptionMutation, UpdateSketchDescriptionMutationVariables>(UpdateSketchDescriptionDocument, options);
      }
export type UpdateSketchDescriptionMutationHookResult = ReturnType<typeof useUpdateSketchDescriptionMutation>;
export type UpdateSketchDescriptionMutationResult = Apollo.MutationResult<UpdateSketchDescriptionMutation>;
export type UpdateSketchDescriptionMutationOptions = Apollo.BaseMutationOptions<UpdateSketchDescriptionMutation, UpdateSketchDescriptionMutationVariables>;
export const UpdateSketchImageDocument = gql`
    mutation UpdateSketchImage($id: String!, $image: String!) {
  updateSketch(data: {image: {set: $image}}, where: {id: $id}) {
    id
    title
    description
    summary
    image
    download_link
  }
}
    `;
export type UpdateSketchImageMutationFn = Apollo.MutationFunction<UpdateSketchImageMutation, UpdateSketchImageMutationVariables>;

/**
 * __useUpdateSketchImageMutation__
 *
 * To run a mutation, you first call `useUpdateSketchImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSketchImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSketchImageMutation, { data, loading, error }] = useUpdateSketchImageMutation({
 *   variables: {
 *      id: // value for 'id'
 *      image: // value for 'image'
 *   },
 * });
 */
export function useUpdateSketchImageMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSketchImageMutation, UpdateSketchImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSketchImageMutation, UpdateSketchImageMutationVariables>(UpdateSketchImageDocument, options);
      }
export type UpdateSketchImageMutationHookResult = ReturnType<typeof useUpdateSketchImageMutation>;
export type UpdateSketchImageMutationResult = Apollo.MutationResult<UpdateSketchImageMutation>;
export type UpdateSketchImageMutationOptions = Apollo.BaseMutationOptions<UpdateSketchImageMutation, UpdateSketchImageMutationVariables>;
export const UpdateSketchDownloadLinkDocument = gql`
    mutation UpdateSketchDownloadLink($id: String!, $download_link: String!) {
  updateSketch(data: {download_link: {set: $download_link}}, where: {id: $id}) {
    id
    title
    description
    summary
    image
    download_link
  }
}
    `;
export type UpdateSketchDownloadLinkMutationFn = Apollo.MutationFunction<UpdateSketchDownloadLinkMutation, UpdateSketchDownloadLinkMutationVariables>;

/**
 * __useUpdateSketchDownloadLinkMutation__
 *
 * To run a mutation, you first call `useUpdateSketchDownloadLinkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSketchDownloadLinkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSketchDownloadLinkMutation, { data, loading, error }] = useUpdateSketchDownloadLinkMutation({
 *   variables: {
 *      id: // value for 'id'
 *      download_link: // value for 'download_link'
 *   },
 * });
 */
export function useUpdateSketchDownloadLinkMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSketchDownloadLinkMutation, UpdateSketchDownloadLinkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSketchDownloadLinkMutation, UpdateSketchDownloadLinkMutationVariables>(UpdateSketchDownloadLinkDocument, options);
      }
export type UpdateSketchDownloadLinkMutationHookResult = ReturnType<typeof useUpdateSketchDownloadLinkMutation>;
export type UpdateSketchDownloadLinkMutationResult = Apollo.MutationResult<UpdateSketchDownloadLinkMutation>;
export type UpdateSketchDownloadLinkMutationOptions = Apollo.BaseMutationOptions<UpdateSketchDownloadLinkMutation, UpdateSketchDownloadLinkMutationVariables>;
export const UpdateSketchSummaryDocument = gql`
    mutation UpdateSketchSummary($id: String!, $summary: String!) {
  updateSketch(data: {summary: {set: $summary}}, where: {id: $id}) {
    id
    title
    description
    summary
    image
    download_link
  }
}
    `;
export type UpdateSketchSummaryMutationFn = Apollo.MutationFunction<UpdateSketchSummaryMutation, UpdateSketchSummaryMutationVariables>;

/**
 * __useUpdateSketchSummaryMutation__
 *
 * To run a mutation, you first call `useUpdateSketchSummaryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSketchSummaryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSketchSummaryMutation, { data, loading, error }] = useUpdateSketchSummaryMutation({
 *   variables: {
 *      id: // value for 'id'
 *      summary: // value for 'summary'
 *   },
 * });
 */
export function useUpdateSketchSummaryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSketchSummaryMutation, UpdateSketchSummaryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSketchSummaryMutation, UpdateSketchSummaryMutationVariables>(UpdateSketchSummaryDocument, options);
      }
export type UpdateSketchSummaryMutationHookResult = ReturnType<typeof useUpdateSketchSummaryMutation>;
export type UpdateSketchSummaryMutationResult = Apollo.MutationResult<UpdateSketchSummaryMutation>;
export type UpdateSketchSummaryMutationOptions = Apollo.BaseMutationOptions<UpdateSketchSummaryMutation, UpdateSketchSummaryMutationVariables>;
export const UpdateTechCategoryDocument = gql`
    mutation UpdateTechCategory($name: String!, $techCategoryId: String!) {
  updateTechCategory(data: {name: {set: $name}}, where: {id: $techCategoryId}) {
    id
    name
    techs {
      id
      name
    }
  }
}
    `;
export type UpdateTechCategoryMutationFn = Apollo.MutationFunction<UpdateTechCategoryMutation, UpdateTechCategoryMutationVariables>;

/**
 * __useUpdateTechCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateTechCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTechCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTechCategoryMutation, { data, loading, error }] = useUpdateTechCategoryMutation({
 *   variables: {
 *      name: // value for 'name'
 *      techCategoryId: // value for 'techCategoryId'
 *   },
 * });
 */
export function useUpdateTechCategoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTechCategoryMutation, UpdateTechCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTechCategoryMutation, UpdateTechCategoryMutationVariables>(UpdateTechCategoryDocument, options);
      }
export type UpdateTechCategoryMutationHookResult = ReturnType<typeof useUpdateTechCategoryMutation>;
export type UpdateTechCategoryMutationResult = Apollo.MutationResult<UpdateTechCategoryMutation>;
export type UpdateTechCategoryMutationOptions = Apollo.BaseMutationOptions<UpdateTechCategoryMutation, UpdateTechCategoryMutationVariables>;
export const UpdateQuestionDocument = gql`
    mutation UpdateQuestion($id: String!, $question: String!, $answer: String!) {
  updateQuestion(
    data: {question: {set: $question}, answer: {set: $answer}}
    where: {id: $id}
  ) {
    id
    question
    answer
  }
}
    `;
export type UpdateQuestionMutationFn = Apollo.MutationFunction<UpdateQuestionMutation, UpdateQuestionMutationVariables>;

/**
 * __useUpdateQuestionMutation__
 *
 * To run a mutation, you first call `useUpdateQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateQuestionMutation, { data, loading, error }] = useUpdateQuestionMutation({
 *   variables: {
 *      id: // value for 'id'
 *      question: // value for 'question'
 *      answer: // value for 'answer'
 *   },
 * });
 */
export function useUpdateQuestionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateQuestionMutation, UpdateQuestionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateQuestionMutation, UpdateQuestionMutationVariables>(UpdateQuestionDocument, options);
      }
export type UpdateQuestionMutationHookResult = ReturnType<typeof useUpdateQuestionMutation>;
export type UpdateQuestionMutationResult = Apollo.MutationResult<UpdateQuestionMutation>;
export type UpdateQuestionMutationOptions = Apollo.BaseMutationOptions<UpdateQuestionMutation, UpdateQuestionMutationVariables>;
export const DeletestackDocument = gql`
    mutation Deletestack($id: String!) {
  deleteStack(where: {id: $id}) {
    id
  }
}
    `;
export type DeletestackMutationFn = Apollo.MutationFunction<DeletestackMutation, DeletestackMutationVariables>;

/**
 * __useDeletestackMutation__
 *
 * To run a mutation, you first call `useDeletestackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletestackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletestackMutation, { data, loading, error }] = useDeletestackMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletestackMutation(baseOptions?: Apollo.MutationHookOptions<DeletestackMutation, DeletestackMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletestackMutation, DeletestackMutationVariables>(DeletestackDocument, options);
      }
export type DeletestackMutationHookResult = ReturnType<typeof useDeletestackMutation>;
export type DeletestackMutationResult = Apollo.MutationResult<DeletestackMutation>;
export type DeletestackMutationOptions = Apollo.BaseMutationOptions<DeletestackMutation, DeletestackMutationVariables>;
export const DeleteProjectDocument = gql`
    mutation DeleteProject($id: String!) {
  deleteProject(where: {id: $id}) {
    id
  }
}
    `;
export type DeleteProjectMutationFn = Apollo.MutationFunction<DeleteProjectMutation, DeleteProjectMutationVariables>;

/**
 * __useDeleteProjectMutation__
 *
 * To run a mutation, you first call `useDeleteProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProjectMutation, { data, loading, error }] = useDeleteProjectMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteProjectMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProjectMutation, DeleteProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProjectMutation, DeleteProjectMutationVariables>(DeleteProjectDocument, options);
      }
export type DeleteProjectMutationHookResult = ReturnType<typeof useDeleteProjectMutation>;
export type DeleteProjectMutationResult = Apollo.MutationResult<DeleteProjectMutation>;
export type DeleteProjectMutationOptions = Apollo.BaseMutationOptions<DeleteProjectMutation, DeleteProjectMutationVariables>;
export const DeleteSketchDocument = gql`
    mutation DeleteSketch($id: String!) {
  deleteSketch(where: {id: $id}) {
    id
  }
}
    `;
export type DeleteSketchMutationFn = Apollo.MutationFunction<DeleteSketchMutation, DeleteSketchMutationVariables>;

/**
 * __useDeleteSketchMutation__
 *
 * To run a mutation, you first call `useDeleteSketchMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSketchMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSketchMutation, { data, loading, error }] = useDeleteSketchMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteSketchMutation(baseOptions?: Apollo.MutationHookOptions<DeleteSketchMutation, DeleteSketchMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteSketchMutation, DeleteSketchMutationVariables>(DeleteSketchDocument, options);
      }
export type DeleteSketchMutationHookResult = ReturnType<typeof useDeleteSketchMutation>;
export type DeleteSketchMutationResult = Apollo.MutationResult<DeleteSketchMutation>;
export type DeleteSketchMutationOptions = Apollo.BaseMutationOptions<DeleteSketchMutation, DeleteSketchMutationVariables>;
export const DeleteTechCategoryDocument = gql`
    mutation DeleteTechCategory($id: String!) {
  deleteTechCategory(where: {id: $id}) {
    id
  }
}
    `;
export type DeleteTechCategoryMutationFn = Apollo.MutationFunction<DeleteTechCategoryMutation, DeleteTechCategoryMutationVariables>;

/**
 * __useDeleteTechCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteTechCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTechCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTechCategoryMutation, { data, loading, error }] = useDeleteTechCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTechCategoryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTechCategoryMutation, DeleteTechCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTechCategoryMutation, DeleteTechCategoryMutationVariables>(DeleteTechCategoryDocument, options);
      }
export type DeleteTechCategoryMutationHookResult = ReturnType<typeof useDeleteTechCategoryMutation>;
export type DeleteTechCategoryMutationResult = Apollo.MutationResult<DeleteTechCategoryMutation>;
export type DeleteTechCategoryMutationOptions = Apollo.BaseMutationOptions<DeleteTechCategoryMutation, DeleteTechCategoryMutationVariables>;
export const DeleteTechDocument = gql`
    mutation DeleteTech($id: String!) {
  deleteTech(where: {id: $id}) {
    id
  }
}
    `;
export type DeleteTechMutationFn = Apollo.MutationFunction<DeleteTechMutation, DeleteTechMutationVariables>;

/**
 * __useDeleteTechMutation__
 *
 * To run a mutation, you first call `useDeleteTechMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTechMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTechMutation, { data, loading, error }] = useDeleteTechMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTechMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTechMutation, DeleteTechMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTechMutation, DeleteTechMutationVariables>(DeleteTechDocument, options);
      }
export type DeleteTechMutationHookResult = ReturnType<typeof useDeleteTechMutation>;
export type DeleteTechMutationResult = Apollo.MutationResult<DeleteTechMutation>;
export type DeleteTechMutationOptions = Apollo.BaseMutationOptions<DeleteTechMutation, DeleteTechMutationVariables>;
export const DeleteQuestionDocument = gql`
    mutation DeleteQuestion($id: String!) {
  deleteQuestion(where: {id: $id}) {
    id
  }
}
    `;
export type DeleteQuestionMutationFn = Apollo.MutationFunction<DeleteQuestionMutation, DeleteQuestionMutationVariables>;

/**
 * __useDeleteQuestionMutation__
 *
 * To run a mutation, you first call `useDeleteQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteQuestionMutation, { data, loading, error }] = useDeleteQuestionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteQuestionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteQuestionMutation, DeleteQuestionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteQuestionMutation, DeleteQuestionMutationVariables>(DeleteQuestionDocument, options);
      }
export type DeleteQuestionMutationHookResult = ReturnType<typeof useDeleteQuestionMutation>;
export type DeleteQuestionMutationResult = Apollo.MutationResult<DeleteQuestionMutation>;
export type DeleteQuestionMutationOptions = Apollo.BaseMutationOptions<DeleteQuestionMutation, DeleteQuestionMutationVariables>;
export const IsThereAdminQueryDocument = gql`
    query IsThereAdminQuery {
  isThereAnAdmin
}
    `;

/**
 * __useIsThereAdminQueryQuery__
 *
 * To run a query within a React component, call `useIsThereAdminQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsThereAdminQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsThereAdminQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useIsThereAdminQueryQuery(baseOptions?: Apollo.QueryHookOptions<IsThereAdminQueryQuery, IsThereAdminQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IsThereAdminQueryQuery, IsThereAdminQueryQueryVariables>(IsThereAdminQueryDocument, options);
      }
export function useIsThereAdminQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsThereAdminQueryQuery, IsThereAdminQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IsThereAdminQueryQuery, IsThereAdminQueryQueryVariables>(IsThereAdminQueryDocument, options);
        }
export type IsThereAdminQueryQueryHookResult = ReturnType<typeof useIsThereAdminQueryQuery>;
export type IsThereAdminQueryLazyQueryHookResult = ReturnType<typeof useIsThereAdminQueryLazyQuery>;
export type IsThereAdminQueryQueryResult = Apollo.QueryResult<IsThereAdminQueryQuery, IsThereAdminQueryQueryVariables>;
export const QuerySingleProjectWithRelationsDocument = gql`
    query QuerySingleProjectWithRelations($id: String!) {
  project(where: {id: $id}) {
    id
    name
    app_url
    github_url
    image
    type
    summary
    questions {
      id
      question
      answer
    }
    sketches {
      id
      title
      description
      summary
      download_link
      image
    }
    tech_categories {
      id
      name
      techs {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useQuerySingleProjectWithRelationsQuery__
 *
 * To run a query within a React component, call `useQuerySingleProjectWithRelationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuerySingleProjectWithRelationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuerySingleProjectWithRelationsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useQuerySingleProjectWithRelationsQuery(baseOptions: Apollo.QueryHookOptions<QuerySingleProjectWithRelationsQuery, QuerySingleProjectWithRelationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QuerySingleProjectWithRelationsQuery, QuerySingleProjectWithRelationsQueryVariables>(QuerySingleProjectWithRelationsDocument, options);
      }
export function useQuerySingleProjectWithRelationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QuerySingleProjectWithRelationsQuery, QuerySingleProjectWithRelationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QuerySingleProjectWithRelationsQuery, QuerySingleProjectWithRelationsQueryVariables>(QuerySingleProjectWithRelationsDocument, options);
        }
export type QuerySingleProjectWithRelationsQueryHookResult = ReturnType<typeof useQuerySingleProjectWithRelationsQuery>;
export type QuerySingleProjectWithRelationsLazyQueryHookResult = ReturnType<typeof useQuerySingleProjectWithRelationsLazyQuery>;
export type QuerySingleProjectWithRelationsQueryResult = Apollo.QueryResult<QuerySingleProjectWithRelationsQuery, QuerySingleProjectWithRelationsQueryVariables>;
export const QueryProjectsWithRelationsDocument = gql`
    query QueryProjectsWithRelations {
  projects {
    id
    name
    app_url
    github_url
    image
    type
    summary
    questions {
      id
      question
      answer
    }
    sketches {
      id
      title
      description
      summary
      download_link
      image
    }
    tech_categories {
      id
      name
      techs {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useQueryProjectsWithRelationsQuery__
 *
 * To run a query within a React component, call `useQueryProjectsWithRelationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryProjectsWithRelationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryProjectsWithRelationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useQueryProjectsWithRelationsQuery(baseOptions?: Apollo.QueryHookOptions<QueryProjectsWithRelationsQuery, QueryProjectsWithRelationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryProjectsWithRelationsQuery, QueryProjectsWithRelationsQueryVariables>(QueryProjectsWithRelationsDocument, options);
      }
export function useQueryProjectsWithRelationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryProjectsWithRelationsQuery, QueryProjectsWithRelationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryProjectsWithRelationsQuery, QueryProjectsWithRelationsQueryVariables>(QueryProjectsWithRelationsDocument, options);
        }
export type QueryProjectsWithRelationsQueryHookResult = ReturnType<typeof useQueryProjectsWithRelationsQuery>;
export type QueryProjectsWithRelationsLazyQueryHookResult = ReturnType<typeof useQueryProjectsWithRelationsLazyQuery>;
export type QueryProjectsWithRelationsQueryResult = Apollo.QueryResult<QueryProjectsWithRelationsQuery, QueryProjectsWithRelationsQueryVariables>;
export const QueryProjectsWithTechCategoriesDocument = gql`
    query QueryProjectsWithTechCategories {
  projects {
    app_url
    github_url
    id
    image
    name
    summary
    type
    tech_categories {
      name
      id
      techs {
        name
        id
      }
    }
  }
}
    `;

/**
 * __useQueryProjectsWithTechCategoriesQuery__
 *
 * To run a query within a React component, call `useQueryProjectsWithTechCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryProjectsWithTechCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryProjectsWithTechCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useQueryProjectsWithTechCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<QueryProjectsWithTechCategoriesQuery, QueryProjectsWithTechCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryProjectsWithTechCategoriesQuery, QueryProjectsWithTechCategoriesQueryVariables>(QueryProjectsWithTechCategoriesDocument, options);
      }
export function useQueryProjectsWithTechCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryProjectsWithTechCategoriesQuery, QueryProjectsWithTechCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryProjectsWithTechCategoriesQuery, QueryProjectsWithTechCategoriesQueryVariables>(QueryProjectsWithTechCategoriesDocument, options);
        }
export type QueryProjectsWithTechCategoriesQueryHookResult = ReturnType<typeof useQueryProjectsWithTechCategoriesQuery>;
export type QueryProjectsWithTechCategoriesLazyQueryHookResult = ReturnType<typeof useQueryProjectsWithTechCategoriesLazyQuery>;
export type QueryProjectsWithTechCategoriesQueryResult = Apollo.QueryResult<QueryProjectsWithTechCategoriesQuery, QueryProjectsWithTechCategoriesQueryVariables>;
export const QueryProjectsWithoutRelationsDocument = gql`
    query QueryProjectsWithoutRelations {
  projects {
    app_url
    github_url
    id
    image
    name
    summary
    type
  }
}
    `;

/**
 * __useQueryProjectsWithoutRelationsQuery__
 *
 * To run a query within a React component, call `useQueryProjectsWithoutRelationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryProjectsWithoutRelationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryProjectsWithoutRelationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useQueryProjectsWithoutRelationsQuery(baseOptions?: Apollo.QueryHookOptions<QueryProjectsWithoutRelationsQuery, QueryProjectsWithoutRelationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryProjectsWithoutRelationsQuery, QueryProjectsWithoutRelationsQueryVariables>(QueryProjectsWithoutRelationsDocument, options);
      }
export function useQueryProjectsWithoutRelationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryProjectsWithoutRelationsQuery, QueryProjectsWithoutRelationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryProjectsWithoutRelationsQuery, QueryProjectsWithoutRelationsQueryVariables>(QueryProjectsWithoutRelationsDocument, options);
        }
export type QueryProjectsWithoutRelationsQueryHookResult = ReturnType<typeof useQueryProjectsWithoutRelationsQuery>;
export type QueryProjectsWithoutRelationsLazyQueryHookResult = ReturnType<typeof useQueryProjectsWithoutRelationsLazyQuery>;
export type QueryProjectsWithoutRelationsQueryResult = Apollo.QueryResult<QueryProjectsWithoutRelationsQuery, QueryProjectsWithoutRelationsQueryVariables>;
export const QueryMessagesDocument = gql`
    query QueryMessages {
  messages {
    answer_status
    answeredAt
    body
    createdAd
    from
    id
    read_status
    subject
  }
}
    `;

/**
 * __useQueryMessagesQuery__
 *
 * To run a query within a React component, call `useQueryMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryMessagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useQueryMessagesQuery(baseOptions?: Apollo.QueryHookOptions<QueryMessagesQuery, QueryMessagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryMessagesQuery, QueryMessagesQueryVariables>(QueryMessagesDocument, options);
      }
export function useQueryMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryMessagesQuery, QueryMessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryMessagesQuery, QueryMessagesQueryVariables>(QueryMessagesDocument, options);
        }
export type QueryMessagesQueryHookResult = ReturnType<typeof useQueryMessagesQuery>;
export type QueryMessagesLazyQueryHookResult = ReturnType<typeof useQueryMessagesLazyQuery>;
export type QueryMessagesQueryResult = Apollo.QueryResult<QueryMessagesQuery, QueryMessagesQueryVariables>;
export const QueryStacksDocument = gql`
    query QueryStacks {
  stacks {
    id
    title
    image
  }
}
    `;

/**
 * __useQueryStacksQuery__
 *
 * To run a query within a React component, call `useQueryStacksQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryStacksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryStacksQuery({
 *   variables: {
 *   },
 * });
 */
export function useQueryStacksQuery(baseOptions?: Apollo.QueryHookOptions<QueryStacksQuery, QueryStacksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryStacksQuery, QueryStacksQueryVariables>(QueryStacksDocument, options);
      }
export function useQueryStacksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryStacksQuery, QueryStacksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryStacksQuery, QueryStacksQueryVariables>(QueryStacksDocument, options);
        }
export type QueryStacksQueryHookResult = ReturnType<typeof useQueryStacksQuery>;
export type QueryStacksLazyQueryHookResult = ReturnType<typeof useQueryStacksLazyQuery>;
export type QueryStacksQueryResult = Apollo.QueryResult<QueryStacksQuery, QueryStacksQueryVariables>;
export const QueryDashboardStuffDocument = gql`
    query QueryDashboardStuff {
  me {
    email
  }
  stacks {
    id
    title
    image
  }
  messages {
    answer_status
    answeredAt
    body
    createdAd
    from
    id
    read_status
    subject
  }
  projects {
    app_url
    github_url
    id
    image
    name
    summary
    type
    tech_categories {
      name
      id
      techs {
        name
        id
      }
    }
  }
}
    `;

/**
 * __useQueryDashboardStuffQuery__
 *
 * To run a query within a React component, call `useQueryDashboardStuffQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryDashboardStuffQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryDashboardStuffQuery({
 *   variables: {
 *   },
 * });
 */
export function useQueryDashboardStuffQuery(baseOptions?: Apollo.QueryHookOptions<QueryDashboardStuffQuery, QueryDashboardStuffQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryDashboardStuffQuery, QueryDashboardStuffQueryVariables>(QueryDashboardStuffDocument, options);
      }
export function useQueryDashboardStuffLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryDashboardStuffQuery, QueryDashboardStuffQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryDashboardStuffQuery, QueryDashboardStuffQueryVariables>(QueryDashboardStuffDocument, options);
        }
export type QueryDashboardStuffQueryHookResult = ReturnType<typeof useQueryDashboardStuffQuery>;
export type QueryDashboardStuffLazyQueryHookResult = ReturnType<typeof useQueryDashboardStuffLazyQuery>;
export type QueryDashboardStuffQueryResult = Apollo.QueryResult<QueryDashboardStuffQuery, QueryDashboardStuffQueryVariables>;