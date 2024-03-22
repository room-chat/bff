import { IsEmail, IsString } from "class-validator";


export interface AuthUserRes {
  userId: number;
  email: string;
  address: string;
  dayOfBirth: string;
  city: string;
  firstName: string;
  lastName: string;
}

export class AuthReq {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}