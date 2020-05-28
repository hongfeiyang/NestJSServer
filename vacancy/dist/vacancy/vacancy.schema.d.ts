import { Document, Types } from 'mongoose';
export declare class Vacancy extends Document {
    title: string;
    description: string;
    expiredAt: string;
    company_id: Types.ObjectId;
}
export declare const VacancySchema: import("mongoose").Schema<any>;
