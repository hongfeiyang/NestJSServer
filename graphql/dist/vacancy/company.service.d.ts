import { ClientProxy } from "@nestjs/microservices";
import { Company } from "./models/company.model";
export declare class CompanyService {
    private readonly companyClient;
    constructor(companyClient: ClientProxy);
    onApplicationBootstrap(): Promise<void>;
    getOneCompany(id: string): Promise<Company>;
}
