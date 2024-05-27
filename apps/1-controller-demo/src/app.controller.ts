import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateMessageDto } from './dto/create-message.dto';

// import { Query as ExpressQuery } from 'express-serve-static-core';
// import { Request, Response } from 'express';

// @Query() query: ExpressQuery
// @Req() request: Request
// @Headers() headers: Record<string, string | string[]>
// @Req() response: Response
// response.status(200).send()

// Nest detects when the handler is using either @Res() or @Next(), indicating you have chosen the library-specific option. If both approaches are used at the same time, the Standard approach is automatically disabled for this single route and will no longer work as expected. To use both approaches at the same time (for example, by injecting the response object to only set cookies/headers but still leave the rest to the framework), you must set the passthrough option to true in the @Res({ passthrough: true }) decorator.

@Controller('controller')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  listMessages() {
    const message = this.appService.getHello();
    console.log(message);
    return { message };
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body);
    return { body };
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id);
    return { id };
  }
}
