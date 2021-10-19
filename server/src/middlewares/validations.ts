import {
  IsNotEmpty,
  IsBoolean,
  IsEmail,
  IsString,
  IsUrl,
  IsUUID,
  Length,
  MinLength,
} from "class-validator";
import { UseMiddleware } from "type-graphql";
import { isLoggedIn } from "./isLoggedIn";

export const adminPropsValidation = {
  id: [IsNotEmpty(), IsString(), IsUUID()],
  email: [IsNotEmpty(), IsString(), IsEmail()],
  fname: [IsNotEmpty(), IsString(), Length(3, 20)],
  lname: [IsNotEmpty(), IsString(), Length(3, 20)],
  password: [IsNotEmpty(), IsString(), MinLength(8)],
  github: [IsNotEmpty(), IsString(), IsUrl()],
  linkedIn: [IsNotEmpty(), IsString(), IsUrl()],
  instagram: [IsNotEmpty(), IsString(), IsUrl()],
  whatsapp: [IsNotEmpty(), IsString()],
  heroImage: [IsNotEmpty(), IsString()],
};

export const aboutPropsValidation = {
  id: [IsNotEmpty(), IsString(), IsUUID()],
  body: [IsNotEmpty(), IsString()],
  title: [IsNotEmpty(), IsString()],
};

export const techPropsValidation = {
  id: [IsNotEmpty(), IsString(), IsUUID()],
  name: [IsNotEmpty(), IsString()],
};

export const techCategoryPropsValidation = {
  id: [IsNotEmpty(), IsString(), IsUUID()],
  name: [IsNotEmpty(), IsString()],
};

export const projectPropsValidation = {
  id: [IsNotEmpty(), IsString(), IsUUID()],
  image: [IsNotEmpty(), IsString()],
  app_url: [IsNotEmpty(), IsString(), IsUrl()],
  description: [IsNotEmpty(), IsString()],
  github_url: [IsNotEmpty(), IsString(), IsUrl()],
  name: [IsNotEmpty(), IsString()],
};

export const answerPropsValidation = {
  id: [IsNotEmpty(), IsString(), IsUUID()],
  answer: [IsNotEmpty(), IsString()],
};

export const questionPropsValidation = {
  id: [IsNotEmpty(), IsString(), IsUUID()],
  question: [IsNotEmpty(), IsString()],
};

export const sketchPropsValidation = {
  id: [IsNotEmpty(), IsString(), IsUUID()],
  description: [IsNotEmpty(), IsString()],
  summary: [IsNotEmpty(), IsString()],
  download_link: [IsNotEmpty(), IsString(), IsUrl()],
  image: [IsNotEmpty(), IsString()],
  title: [IsNotEmpty(), IsString()],
};
export const messagePropsValidation = {
  id: [IsNotEmpty(), IsString(), IsUUID()],
  body: [IsNotEmpty(), IsString()],
  from: [IsEmail()],
  read_status: [IsBoolean()],
  answer_status: [IsBoolean()],
  subject: [IsNotEmpty(), IsString()],
};
