import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class SignupUserDto {
  @ApiProperty({
    example: '6654774db7858569ef3f7ade',
    description: 'The id of the user',
  })
  @IsString()
  readonly id: string;

  @ApiProperty({
    example: 'vikas@perforce.com',
    description: 'The email of the user',
  })
  @IsEmail()
  readonly email: string;

  @ApiProperty({
    example: 'summer24',
    description: 'The password of the user',
  })
  @IsString()
  readonly password: string;
}
