import { ClientProxy } from "@nestjs/microservices";
import { Vacancy } from "../models/vacancy.model";
import { VacancyDto } from "../dto/vacancy.dto";
export declare class VacancyService {
    private readonly vacancyClient;
    constructor(vacancyClient: ClientProxy);
    getAllVacanciesByCustomerId(customerId: string): Promise<Vacancy[]>;
    getAllVacancies(): Promise<Vacancy[]>;
    getOneVacancy(id: string): Promise<Vacancy>;
    findOneAndRemove(id: string): Promise<Vacancy>;
    findOneAndUpdate(id: string, update: VacancyDto): Promise<any>;
    createOne(data: VacancyDto): Promise<any>;
}
