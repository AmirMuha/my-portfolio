import {
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
};

export const aboutPropsValidation = {
  id: [IsString(), IsUUID()],
  body: [UseMiddleware(isLoggedIn), IsString()],
  title: [UseMiddleware(isLoggedIn), IsString()],
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
  question: [IsString()],
};

export const questionPropsValidation = {
  id: [IsString(), IsUUID()],
  answer: [IsString()],
};

export const sketchPropsValidation = {
  id: [IsString(), IsUUID()],
  body: [IsString()],
  download_link: [IsString(), IsUrl()],
  image: [IsString()],
  title: [IsString()],
};
