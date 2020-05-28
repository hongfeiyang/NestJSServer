import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: 'localhost',
      port: 3000
    }
  })
  
  app.startAllMicroservicesAsync();
  await app.listen(3010);

  console.log(`User Service is running on ${ await app.getUrl()}`)
}
bootstrap();
