import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    CompanyModule,
    MongooseModule.forRoot("mongodb://mongodb/company-service"),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
