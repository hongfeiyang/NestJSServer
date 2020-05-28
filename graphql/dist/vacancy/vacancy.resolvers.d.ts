import { VacancyService } from './vacancy.service';
import { CreateVacancyDto as CreateVacancyDto } from './create-vacancy.dto';
import { Vacancy } from './graphql.schema';
export declare class VacancyResolvers {
    private readonly vacancyService;
    constructor(vacancyService: VacancyService);
    getCats(): Promise<Vacancy[]>;
    findOneById(id: number): Promise<Vacancy>;
    create(args: CreateVacancyDto): Promise<Vacancy>;
    catCreated(): AsyncIterator<unknown, any, undefined>;
}
