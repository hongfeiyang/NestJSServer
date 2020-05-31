import { VacancyService } from "../services/vacancy.service";
import { Vacancy } from "../models/vacancy.model";
import { CompanyService } from "../services/company.service";
import { VacancyInput } from "../models/vacancy.input";
import { User } from "../models/user.model";
export declare class VacancyResolver {
    private vacancyService;
    private companyService;
    constructor(vacancyService: VacancyService, companyService: CompanyService);
    getAllVacanciesOfThisCutomer(user: User): Promise<Vacancy[]>;
    getAllVacanciesOfAllCompanies(): Promise<Vacancy[]>;
    me(user: User): Promise<User>;
    getVacancy(id: string): Promise<Vacancy>;
    createVacancy(input: VacancyInput, user: User): Promise<any>;
    deleteOneVacancy(id: string): Promise<String>;
    updateOneVacancy(id: string, update: VacancyInput, user: User): Promise<String>;
    company(vacancy: Vacancy): Promise<import("../models/company.model").Company>;
}
