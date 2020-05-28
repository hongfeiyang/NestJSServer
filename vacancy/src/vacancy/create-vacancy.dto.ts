import { Types } from "mongoose";

export class createVacancyDto {
    title: string;

    description: string;

    expiredAt: string;
    
    company_id: Types.ObjectId;
}