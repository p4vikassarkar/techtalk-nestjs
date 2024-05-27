import { Injectable } from '@nestjs/common';
import { AppRepository } from './app.repository';

@Injectable()
export class AppService {
  constructor(public appRepository: AppRepository) {}

  findOne(id: string) {
    return this.appRepository.findOne(id);
  }

  findAll() {
    return this.appRepository.findAll();
  }

  create(content: string) {
    return this.appRepository.create(content);
  }
}
