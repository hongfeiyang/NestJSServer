import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vacancy } from './vacancy.schema';
import { createVacancyDto } from './create-vacancy.dto';

@Injectable()
export class VacancyService {
    constructor(@InjectModel(Vacancy.name) private vacancyModel: Model<Vacancy>) { }

    async create(data: createVacancyDto): Promise<Vacancy> {
        const newItem = new this.vacancyModel(data);
        return newItem.save();
    }

    async findAllByCustomerId(customerId: string): Promise<Vacancy[]> {
        return this.vacancyModel.find({company_id: customerId}).exec();
    }

    async findAll(): Promise<Vacancy[]> {
        return this.vacancyModel.find().exec();
    }

    async findOne(id: string): Promise<Vacancy> {
        const item = await this.vacancyModel.findOne({"_id": id}).exec();
        return item
    }

    async findOneAndDelete(id: string): Promise<Vacancy> {
        return this.vacancyModel.findOneAndDelete({"_id": id}).exec();
    }

    async findOneAndUpdate(id: string, data: createVacancyDto): Promise<Vacancy> {
        return this.vacancyModel.findOneAndUpdate({"_id": id}, data).exec()
    }

    async removeAll() {
        return this.vacancyModel.find().remove().exec();
    }
}
