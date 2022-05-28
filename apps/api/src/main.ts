/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import * as fs from 'fs';

async function bootstrap() {
  let httpsOptions = {};

  if (process.env.NODE_ENV === 'production') {
    httpsOptions = {
      key: fs.readFileSync(process.env.NX_CERT_KEY),
      cert: fs.readFileSync(process.env.NX_CERT_KEY),
      ca: fs.readFileSync(process.env.NX_CERT_CA),
    };
  }

  const app = await NestFactory.create(AppModule, {
    ...httpsOptions,
    cors: true,
  });
  const port = process.env.NX_PORT || 3333;

  app.enableCors({
    //origin: ['http://localhost:8080', 'http://192.168.1.70:8080'],
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    credentials: false,
  });

  await app.listen(port, '0.0.0.0');
  Logger.log(`🚀 Application is running on: http://localhost:${port}`);
}

bootstrap();
