import { IsEmail, IsString, Length } from "class-validator";

export const adminPropsValidation = {
  email: [IsEmail()],
  fname: [IsString(), Length(3, 20)],
  lname: [IsString(), Length(3, 20)],
  password: [IsString(), Length(8, 50)],
};
