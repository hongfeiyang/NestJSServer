import { Company } from "../models/company.model";
import { CompanyService } from "../services/company.service";
import { CompanyInput } from "../models/company.input";
export declare class CompanyResolver {
    private companyService;
    constructor(companyService: CompanyService);
    getCompany(id: string): Promise<Company>;
    getAllCompanies(): Promise<Company[]>;
    createCompany(input: CompanyInput): Promise<Company>;
    deleteOneCompany(id: string): Promise<Company>;
}
