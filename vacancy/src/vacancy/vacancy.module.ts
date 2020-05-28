import { Module } from '@nestjs/common';
import { VacancyService } from './vacancy.service';
import { VacancyController } from './vacancy.controller';
import { Vacancy, VacancySchema } from './vacancy.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
@Module({
  providers: [VacancyService],
  controllers: [VacancyController],
  imports: [
    MongooseModule.forFeature([{ name: Vacancy.name, schema: VacancySchema }]), // forFeature is used to define which model should be registered in the current scope
    JwtModule.register({ secret: 'secret' })
  ]
})
export class VacancyModule { }
