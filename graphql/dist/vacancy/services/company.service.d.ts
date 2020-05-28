import { ClientProxy } from "@nestjs/microservices";
import { Company } from "../models/company.model";
import { CompanyDto } from "../dto/company.dto";
export declare class CompanyService {
    private readonly companyClient;
    constructor(companyClient: ClientProxy);
    getOneCompany(id: string): Promise<Company>;
    getAllCompanies(): Promise<Company[]>;
    createCompany(data: CompanyDto): Promise<Company>;
    deleteOneCompany(id: string): Promise<Company>;
}
