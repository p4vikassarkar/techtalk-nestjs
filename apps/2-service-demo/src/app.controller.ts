import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateMessageDto } from './dto/create-message.dto';

@Controller('service')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  listMessages() {
    return this.appService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.appService.create(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.appService.findOne(id);

    if (!message) {
      throw new NotFoundException('message not found');
    }

    return message;
  }
}
