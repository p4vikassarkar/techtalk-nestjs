import { IsEmail, IsNumber, IsString } from 'class-validator';

export class SignupUserDto {
  @IsNumber()
  readonly id: number;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly password: string;
}
