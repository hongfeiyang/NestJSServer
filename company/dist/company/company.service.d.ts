import { Company } from './company.schema';
import { Model } from 'mongoose';
import { createCompanyDto } from './company.dto';
export declare class CompanyService {
    private companyModel;
    constructor(companyModel: Model<Company>);
    findAll(): Promise<Company[]>;
    findOne(id: string): Promise<Company>;
    create(data: createCompanyDto): Promise<Company>;
    findOneAndDelete(id: string): Promise<Company>;
}
