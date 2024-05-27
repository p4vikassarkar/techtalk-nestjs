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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Serialize(UserDetailsDto)
@Controller('mongoose')
export class UserController {
  constructor(private userservice: UserService) {}
  /**
   * USER LOGIN
   * @param body
   * @returns
   */
  @Post('login')
  @ApiOperation({ summary: 'user login' })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully loggedin.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  login(@Body() body: LoginUserDto) {
    Logger.log(body);
    return this.userservice.login(body.email, body.password);
  }

  /**
   * USER SIGNUP
   * @param body
   * @returns
   */
  @Post('signup')
  @ApiOperation({ summary: 'user signup' })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async signup(@Body() body: SignupUserDto) {
    Logger.log(body);
    return await this.userservice.signup(body.email, body.password);
  }

  /**
   * GETALL USERS
   * @returns
   */
  @Get('alluser')
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'Return all users.' })
  getAllUser() {
    return this.userservice.findAll();
  }

  /**
   *GET USER BY ID
   * @param id
   * @returns
   */
  @Get('user/:id')
  @ApiOperation({ summary: 'Get user by id' })
  @ApiResponse({
    status: 200,
    description: 'Return the user with the given id.',
  })
  @ApiResponse({ status: 404, description: 'User not found.' })
  getUser(@Param('id') id: string) {
    Logger.log(id);
    return this.userservice.findOne(id);
  }

  /**
   * DELETE USER
   * @param id
   * @returns
   */
  @Delete('user/:id')
  @ApiOperation({ summary: 'Delete user by id' })
  @ApiResponse({
    status: 200,
    description: 'The user has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'User not found.' })
  removeUser(@Param('id') id: string) {
    return this.userservice.remove(id);
  }

  /**
   * UPDATE USER
   * @param id
   * @param body
   * @returns
   */
  @Patch('user/:id')
  @ApiOperation({ summary: 'Update user by id' })
  @ApiResponse({
    status: 200,
    description: 'The user has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'User not found.' })
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.userservice.update(id, body);
  }
}
