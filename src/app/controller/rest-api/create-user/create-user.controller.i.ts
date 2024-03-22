import { IsEmail, IsOptional, IsString } from "class-validator";
import { Status } from "../../../infracture/utils/constant/constant";

export class CreateUserBody{
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  dayOfBirth?: string;

  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;
}

export interface CreateUserRes {
  code: Status,
  message: string[],
  data?: {
    email: string
  }
}
