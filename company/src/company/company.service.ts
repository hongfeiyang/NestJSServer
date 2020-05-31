import { Injectable, HttpException, HttpStatus, HttpCode } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Company } from './company.schema';
import { Model, Types, MongooseFilterQuery } from 'mongoose';
import { createCompanyDto } from './company.dto';

@Injectable()
export class CompanyService {

    constructor(@InjectModel(Company.name) private companyModel: Model<Company>) {}

    async findAll(): Promise<Company[]> {
        return await this.companyModel.find().exec()
    }

    async findOne(id: string): Promise<Company> {
        return this.companyModel.findOne({"_id": id}).exec()
    }

    async create(data: createCompanyDto): Promise<Company> {
        const newCompany = new this.companyModel(data)
        return newCompany.save()
    }

    async findOneAndDelete(id: string): Promise<Company> {
        return this.companyModel.findOneAndDelete({"_id": id}).exec()
    }

}
