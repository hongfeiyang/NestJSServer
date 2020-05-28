import { VacancyService } from "./services/vacancy.service";
import { Vacancy } from "./models/vacancy.model";
import { CompanyService } from "./services/company.service";
import { Company } from "./models/company.model";
import { VacancyInput } from "./models/vacancy.input";
import { User } from "./models/user.model";
export declare class VacancyResolver {
    private vacancyService;
    private companyService;
    constructor(vacancyService: VacancyService, companyService: CompanyService);
    getAllVacancies(user: User): Promise<Vacancy[]>;
    me(user: User): Promise<User>;
    getVacancy(id: string): Promise<Vacancy>;
    createVacancy(input: VacancyInput): Promise<any>;
    deleteOneVacancy(id: string): Promise<Vacancy>;
    updateOneVacancy(id: string, update: VacancyInput): Promise<any>;
    company(vacancy: Vacancy): Promise<Company>;
    getCompany(id: string): Promise<Company>;
}
