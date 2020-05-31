import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Vacancy } from './vacancy.schema';
import { createVacancyDto } from './create-vacancy.dto';
import { RpcException } from '@nestjs/microservices';

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
        try {
            const objectId = Types.ObjectId(id)
            const res = await this.vacancyModel.findOne({"_id": id}).exec();
            return res
        } catch (e) {
            throw new RpcException(`${e}`)
        }
    }

    async findOneAndDelete(id: string): Promise<any> {
        try {
            const objectId = Types.ObjectId(id)
            const res = await this.vacancyModel.findOneAndDelete({"_id": id}).exec();
            return res
        } catch (e) {
            throw new RpcException(`${e}`)
        }
    }

    async findOneAndUpdate(id: string, data: createVacancyDto): Promise<any> {
        try {
            const objectId = Types.ObjectId(id)
            const res = await this.vacancyModel.findOneAndUpdate({"_id": id}, data).exec()
            return res
        } catch (e) {
            throw new RpcException(`${e}`)
        }
    }

    async removeAll() {
        return this.vacancyModel.find().remove().exec();
    }
}
