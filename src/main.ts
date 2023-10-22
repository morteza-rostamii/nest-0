import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// entry point of the application:
async function bootstrap() {
  // create an app
  const app = await NestFactory.create(AppModule);
  // listen on port 3000
  await app.listen(3000);
}
bootstrap();
