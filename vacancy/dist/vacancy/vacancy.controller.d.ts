import { createVacancyDto } from './create-vacancy.dto';
import { VacancyService } from './vacancy.service';
export declare class VacancyController {
    private readonly vacancyService;
    constructor(vacancyService: VacancyService);
    getVacancies(): Promise<import("./vacancy.schema").Vacancy[]>;
    getVacanciesByCutomerId(customerId: string): Promise<import("./vacancy.schema").Vacancy[]>;
    getOneVacancy(id: string): Promise<import("./vacancy.schema").Vacancy>;
    createVacancy(data: createVacancyDto): Promise<import("./vacancy.schema").Vacancy>;
    updateVacancy(data: {
        id: string;
        update: createVacancyDto;
    }): Promise<import("./vacancy.schema").Vacancy>;
    removeVacancy(id: string): Promise<import("./vacancy.schema").Vacancy>;
}
