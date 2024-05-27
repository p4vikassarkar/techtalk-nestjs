import { IsString } from 'class-validator';

export class LoginUserDto {
  @IsString()
  userId: string;
}
