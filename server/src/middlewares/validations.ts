import { IsEmail, IsString, Length, MinLength } from "class-validator";

export const adminPropsValidation = {
  email: [IsString(), IsEmail()],
  fname: [IsString(), Length(3, 20)],
  lname: [IsString(), Length(3, 20)],
  password: [IsString(), MinLength(8)],
};
