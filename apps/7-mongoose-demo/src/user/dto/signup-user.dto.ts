import { IsEmail, IsString } from 'class-validator';

export class SignupUserDto {
  @IsString()
  readonly id: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly password: string;
}
