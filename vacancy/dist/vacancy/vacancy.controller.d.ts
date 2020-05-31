import { createVacancyDto } from './create-vacancy.dto';
import { VacancyService } from './vacancy.service';
export declare class VacancyController {
    private readonly vacancyService;
    constructor(vacancyService: VacancyService);
    getVacancies(): any;
    getVacanciesByCutomerId(customerId: string): any;
    getOneVacancy(id: string): any;
    createVacancy(data: createVacancyDto): any;
    updateVacancy(data: {
        id: string;
        update: createVacancyDto;
    }): any;
    removeVacancy(id: string): any;
}
