import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({
    example: 'vikas@perforce.com',
    description: 'The email of the user',
  })
  @IsEmail()
  @IsOptional()
  readonly email: string;

  @ApiProperty({
    example: 'summer24',
    description: 'The password of the user',
  })
  @IsString()
  @IsOptional()
  readonly password: string;
}
