import { Model } from 'mongoose';
import { Vacancy } from './vacancy.schema';
import { createVacancyDto } from './create-vacancy.dto';
export declare class VacancyService {
    private vacancyModel;
    constructor(vacancyModel: Model<Vacancy>);
    create(data: createVacancyDto): Promise<Vacancy>;
    findAllByCustomerId(customerId: string): Promise<Vacancy[]>;
    findAll(): Promise<Vacancy[]>;
    findOne(id: string): Promise<Vacancy>;
    findOneAndDelete(id: string): Promise<any>;
    findOneAndUpdate(id: string, data: createVacancyDto): Promise<any>;
    removeAll(): Promise<any>;
}
