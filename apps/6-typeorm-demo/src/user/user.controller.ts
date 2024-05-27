import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { SignupUserDto } from './dto/signup-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './users.service';
import { Serialize } from '@techtalk/common-utility';
import { UserDetailsDto } from './dto/user-details.dto';

@Serialize(UserDetailsDto)
@Controller('typeorm')
export class UserController {
  constructor(private userservice: UserService) {}
  @Post('login')
  login(@Body() body: LoginUserDto) {
    Logger.log(body);
    return this.userservice.login(body.email, body.password);
  }

  @Post('signup')
  async signup(@Body() body: SignupUserDto) {
    Logger.log(body);
    return await this.userservice.signup(body.email, body.password);
  }

  @Get('alluser')
  getAllUser() {
    return this.userservice.findAll();
  }

  @Get('user/:id')
  getUser(@Param('id') id: string) {
    Logger.log(id);
    return this.userservice.findOne(parseInt(id));
  }

  @Delete('user/:id')
  removeUser(@Param('id') id: string) {
    return this.userservice.remove(parseInt(id));
  }

  @Patch('user/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.userservice.update(parseInt(id), body);
  }
}
