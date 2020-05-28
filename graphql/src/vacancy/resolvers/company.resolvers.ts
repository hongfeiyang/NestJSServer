import { Company } from "../models/company.model"
import { CompanyService } from "../services/company.service"
import { HttpException, HttpStatus } from "@nestjs/common"
import { Resolver, Mutation, Args, Query  } from "@nestjs/graphql"
import { CompanyDto } from "../dto/company.dto"
import { CompanyInput } from "../models/company.input"


@Resolver(of => Company)
export class CompanyResolver {

    constructor(
        private companyService: CompanyService
    ) {}
    

    @Query(() => Company)
    async getCompany(@Args('id', { type: () => String }) id: string) {
        const item = await this.companyService.getOneCompany(id).catch(e => {
            throw new HttpException(e, HttpStatus.NOT_FOUND) 
        })
        return item
    }

    @Query(() => [Company])
    async getAllCompanies() {
        const items = await this.companyService.getAllCompanies().catch(e => {
            throw new HttpException(e, HttpStatus.NOT_FOUND) 
        })
        return items
    }

    @Mutation(() => Company)
    async createCompany(@Args('input') input: CompanyInput) {
        const companyDto = new CompanyDto()
        companyDto.name = input.name
        companyDto.address = input.address
        return this.companyService.createCompany(companyDto)
    }

    @Mutation(() => Company)
    async deleteOneCompany(@Args('id', { type: () => String }) id: string) {
        return this.companyService.deleteOneCompany(id)
    }
}