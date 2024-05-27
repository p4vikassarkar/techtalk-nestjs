import { Exclude, Expose } from 'class-transformer';

export class UserDetailsDto {
  @Expose()
  name: string;

  @Expose()
  data: object;

  @Expose()
  userid: string;

  @Exclude()
  password: string;
}
