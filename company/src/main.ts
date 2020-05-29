import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: 3004
    }
  })

  app.startAllMicroservicesAsync();
  await app.listen(3030);
  console.log(`Company Service is running on ${ await app.getUrl()}`)

}
bootstrap();
