import { Controller, Post, Body, Get } from '@nestjs/common';
import { CompanyService } from './company.service';
import { createCompanyDto } from './company.dto';
import { MessagePattern } from '@nestjs/microservices';
import { Company } from './company.schema';
import { Types } from 'mongoose';

@Controller('/company')
export class CompanyController {
    constructor(private readonly compancyService: CompanyService) {}
    
    @MessagePattern({role: 'company', cmd: 'create'})
    createCompany(data: createCompanyDto) {
        return this.compancyService.create(data);
    }

    @MessagePattern({role: 'company', cmd: 'getAll'})
    getCompanies() {
        return this.compancyService.findAll();
    }
        
    @MessagePattern({role: 'company', cmd: 'getOne'})
    getOneCompany(id: string): Promise<Company> {
        return this.compancyService.findOne(id)
    }

    @MessagePattern({role: 'company', cmd: 'delete'})
    deleteOneCompany(id: string): Promise<Company> {
        return this.compancyService.findOneAndDelete(id)
    }

}


