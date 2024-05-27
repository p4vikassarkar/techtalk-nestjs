import {
  BadRequestException,
  Body,
  Controller,
  Logger,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { Session, SessionData } from 'express-session';
import { LoginUserDto } from './dto/login-user.dto';

declare module 'express-session' {
  interface SessionData {
    userId: string;
  }
}

declare module 'express' {
  interface Request {
    session: Session & Partial<SessionData>;
  }
}

@Controller('auth')
export class AuthController {
  @Post('login')
  login(@Body() body: LoginUserDto, @Req() req: Request) {
    const userId = body.userId;
    Logger.log(userId);
    req.session.userId = 'userId';
    return {
      message: 'logged in',
      session: req.session,
    };
  }

  @Post('logout')
  logout(@Req() req: Request) {
    req.session.destroy((err) => {
      if (err) {
        throw new BadRequestException('Failed to log out');
      }
      return {
        message: 'logged out',
        session: req.session,
      };
    });
  }
}
