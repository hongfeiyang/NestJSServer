import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { Company, CompanySchema } from './company.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  providers: [CompanyService],
  controllers: [CompanyController],
  imports: [
    MongooseModule.forFeature([ {name: Company.name, schema: CompanySchema} ]), // forFeature is used to define which model should be registered in the current scope
  ]
})
export class CompanyModule {}
