import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 5000);

  console.log(`Server start on PORT: ${process.env.PORT}`);
}
start();
