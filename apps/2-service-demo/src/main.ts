import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ServiceDemoModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(ServiceDemoModule);

  app.use((req, res, next) => {
    res.removeHeader('x-powered-by');
    res.removeHeader('date');
    next();
  });

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
  console.info(`Running Service Demo localhost at http://localhost:3000`);
}

bootstrap();
