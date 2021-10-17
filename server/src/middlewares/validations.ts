import {
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
  id: [IsString(), IsUUID()],
  email: [IsString(), IsEmail()],
  fname: [IsString(), Length(3, 20)],
  lname: [IsString(), Length(3, 20)],
  password: [IsString(), MinLength(8)],
  github: [IsString(), IsUrl()],
  linkedIn: [IsString(), IsUrl()],
  instagram: [IsString(), IsUrl()],
  whatsapp: [IsString()],
  heroImage: [IsString()],
};

export const aboutPropsValidation = {
  id: [IsString(), IsUUID()],
  body: [IsString()],
  title: [IsString()],
};

export const techPropsValidation = {
  id: [IsString(), IsUUID()],
  name: [IsString()],
};

export const techCategoryPropsValidation = {
  id: [IsString(), IsUUID()],
  name: [IsString()],
};

export const projectPropsValidation = {
  id: [IsString(), IsUUID()],
  image: [IsString()],
  app_url: [IsString(), IsUrl()],
  description: [IsString()],
  github_url: [IsString(), IsUrl()],
  name: [IsString()],
};

export const answerPropsValidation = {
  id: [IsString(), IsUUID()],
  answer: [IsString()],
};

export const questionPropsValidation = {
  id: [IsString(), IsUUID()],
  question: [IsString()],
};

export const sketchPropsValidation = {
  id: [IsString(), IsUUID()],
  description: [IsString()],
  summary: [IsString()],
  download_link: [IsString(), IsUrl()],
  image: [IsString()],
  title: [IsString()],
};
export const messagePropsValidation = {
  id: [IsString(), IsUUID()],
  body: [IsString()],
  from: [IsEmail()],
  read_status: [IsBoolean()],
  answer_status: [IsBoolean()],
  subject: [IsString()],
};
