import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './guard/auth.guard';

@Controller('guardmiddleware')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('protected')
  @UseGuards(AuthGuard)
  getProtectedResource() {
    return { message: 'This is a protected resource' };
  }
}
