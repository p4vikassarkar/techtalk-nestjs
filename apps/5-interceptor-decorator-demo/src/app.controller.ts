import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { UserId } from './decorator/user-id.decorator';
import { LoginUserDto } from './auth/dto/login-user.dto';
import { SerializeInterceptor } from './interceptor/serialize.interceptor';
import { UserDetailsDto } from './auth/dto/user-details.dto';
import { Serialize } from './decorator/serialize.decorator';

@Controller('interceptordecorator')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('customdecorator')
  getDecoratorResource(@UserId() userid: LoginUserDto) {
    return { userid: userid };
  }

  @UseInterceptors(new SerializeInterceptor(UserDetailsDto))
  @Get('interceptor')
  getInterceptResource(@UserId() userid: LoginUserDto) {
    return {
      name: 'Dummy name',
      data: {},
      userid: userid || '',
      password: '*******',
    };
  }

  @Serialize(UserDetailsDto)
  @Get('interceptdeco')
  getInterceptDecoResource(@UserId() userid: LoginUserDto) {
    return {
      name: 'Dummy name',
      data: {},
      userid: userid || '',
      password: '*******',
    };
  }
}
