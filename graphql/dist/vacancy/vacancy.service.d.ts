import { ClientProxy } from "@nestjs/microservices";
import { Vacancy } from "./models/vacancy.model";
export declare class VacancyService {
    private readonly vacancyClient;
    constructor(vacancyClient: ClientProxy);
    onApplicationBootstrap(): Promise<void>;
    getOneVacancy(id: string): Promise<Vacancy>;
}
