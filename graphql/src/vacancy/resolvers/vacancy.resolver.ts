import { Query, Resolver, Args, Int, ResolveField, Parent, Mutation, Context } from "@nestjs/graphql";
import { VacancyService } from "../services/vacancy.service";
import { Vacancy } from "../models/vacancy.model";
import { UseGuards, HttpException, HttpStatus } from "@nestjs/common";
import { CompanyService } from "../services/company.service";
import { RolesGuard } from "../guards/roles.guard";
import { AuthGuard } from "../guards/auth-guard";
import { Roles } from "../guards/roles.decorator";
import { VacancyInput } from "../models/vacancy.input";
import { VacancyDto } from "../dto/vacancy.dto";
import { User } from "../models/user.model";


@UseGuards(RolesGuard, AuthGuard)
@Resolver(of => Vacancy)
export class VacancyResolver {

    constructor(
        private vacancyService: VacancyService,
        private companyService: CompanyService
    ) {}
    
    @Query(() => [Vacancy])
    async getAllVacanciesOfThisCutomer(@Context('user') user: User) {
        const customerId = user.customerId
        return this.vacancyService.getAllVacanciesByCustomerId(customerId)
    }

    @Query(() => [Vacancy])
    async getAllVacanciesOfAllCompanies() {
        return this.vacancyService.getAllVacancies()
    }

    @Query(() => User)
    async me(@Context('user') user: User) {
        return user
    }

    @Query(() => Vacancy)
    async getVacancy(@Args('id', { type: () => String }) id: string) {
        const vacancy = await this.vacancyService.getOneVacancy(id)
        if (!vacancy) { throw new HttpException("vacancy not found", HttpStatus.NOT_FOUND) }
        return vacancy
    }

    @Roles('admin')
    @Mutation(() => Vacancy)
    async createVacancy(@Args('input') input: VacancyInput, @Context('user') user: User) {
        const newVacancy = new VacancyDto()
        newVacancy.company_id = user.customerId
        newVacancy.description = input.description
        newVacancy.expiredAt = input.expiredAt
        newVacancy.title = input.title
        return this.vacancyService.createOne(newVacancy)
    }

    @Roles('admin')
    @Mutation(() => String)
    async deleteOneVacancy(@Args('id', { type: () => String }) id: string) {
        return this.vacancyService.findOneAndRemove(id)
    }

    @Roles('admin')
    @Mutation(() => String)
    async updateOneVacancy(@Args('id', { type: () => String }) id: string, @Args('update') update: VacancyInput, @Context('user') user: User) {
        const newInput = new VacancyDto()
        newInput.description = update.description
        newInput.expiredAt = update.expiredAt
        newInput.title = update.title
        return this.vacancyService.findOneAndUpdate(id, newInput)
    }

    @ResolveField()
    async company(@Parent() vacancy: Vacancy) {
        const { company_id } = vacancy
        return this.companyService.getOneCompany(company_id)
    }

}