import { Company } from './company.model';
export declare class Vacancy {
    _id: string;
    title: string;
    description?: string;
    expiredAt?: Date;
    company_id: string;
    company: Company;
}
