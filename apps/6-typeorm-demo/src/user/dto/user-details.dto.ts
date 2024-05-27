import { Exclude, Expose } from 'class-transformer';

export class UserDetailsDto {
  @Expose()
  readonly id: number;

  @Expose()
  readonly email: string;

  @Exclude()
  readonly password: string;
}
