import { CompanyService } from './company.service';
import { createCompanyDto } from './company.dto';
import { Company } from './company.schema';
export declare class CompanyController {
    private readonly compancyService;
    constructor(compancyService: CompanyService);
    createCompany(data: createCompanyDto): Promise<Company>;
    getCompanies(): Promise<Company[]>;
    getOneCompany(id: string): Promise<Company>;
    deleteOneCompany(id: string): Promise<Company>;
}
