import { Controller, Get } from '@nestjs/common';
import { CpuService } from './cpu/cpu.service';
import { DiskService } from './disk/disk.service';

@Controller('module')
export class AppController {
  constructor(
    private cpuService: CpuService,
    private diskService: DiskService,
  ) {}

  @Get()
  run() {
    return [this.cpuService.compute(1, 2), this.diskService.getData()];
  }
}
