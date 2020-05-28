import { Injectable, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { Vacancy } from "../models/vacancy.model";
import { VacancyDto } from "../dto/vacancy.dto";
import { Company } from "../models/company.model";
import { CompanyDto } from "../dto/company.dto";

@Injectable()
export class CompanyService {
    constructor( @Inject('COMPANY_CLIENT') private readonly companyClient: ClientProxy ) {}

    async getOneCompany(id: string): Promise<Company> {
        return this.companyClient.send({ role: 'company', cmd: 'getOne' }, id).toPromise()
    }

    async getAllCompanies(): Promise<Company[]> {
        return this.companyClient.send({ role: 'company', cmd: 'getAll' }, {}).toPromise()
    }

    async createCompany(data: CompanyDto): Promise<Company> {
        return this.companyClient.send({ role: 'company', cmd: 'create' }, data).toPromise()
    }

    async deleteOneCompany(id: string): Promise<Company> {
        return this.companyClient.send({ role: 'company', cmd: 'delete' }, id).toPromise()
    }

}