import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CpuModule } from './cpu/cpu.module';
import { DiskModule } from './disk/disk.module';
// import { APP_PIPE, APP_INTERCEPTOR, APP_GUARD } from '@nestjs/core';

// app.useGlobalPipes(new ValidationPipe());
// @Body(new ValidationPipe())

// app.useGlobalInterceptors(new LoggingInterceptor());
// @UseInterceptors(new LoggingInterceptor())

// app.useGlobalGuards(new RolesGuard());
// @UseGuards(new RolesGuard())

@Module({
  imports: [CpuModule, DiskModule],
  controllers: [AppController],
  providers: [
    //   {
    //     provide: APP_PIPE,
    //     useClass: ValidationPipe,
    //   },
    // {
    //     provide: APP_INTERCEPTOR,
    //     useClass: LoggingInterceptor,
    //   },
    // {
    //   provide: APP_GUARD,
    //   useClass: RolesGuard,
    // },
  ],
  exports: [],
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(LoggerMiddleware).forRoutes('cats');
  // }
}
