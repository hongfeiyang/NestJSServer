import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // await app.listen(3000);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: 3001
    }
  })

  await app.startAllMicroservicesAsync();
  await app.listen(3000);
  console.log(`Auth Service is running on ${ await app.getUrl()}`)

  // const app = await NestFactory.createMicroservice(AppModule, {
  //   tranport: Transport.TCP
  // })

  // app.listen(() => {`User Service is running: ${app}`})
}
bootstrap();
