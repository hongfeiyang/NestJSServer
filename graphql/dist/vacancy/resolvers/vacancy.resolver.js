"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VacancyResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const vacancy_service_1 = require("../services/vacancy.service");
const vacancy_model_1 = require("../models/vacancy.model");
const common_1 = require("@nestjs/common");
const company_service_1 = require("../services/company.service");
const roles_guard_1 = require("../guards/roles.guard");
const auth_guard_1 = require("../guards/auth-guard");
const roles_decorator_1 = require("../guards/roles.decorator");
const vacancy_input_1 = require("../models/vacancy.input");
const vacancy_dto_1 = require("../dto/vacancy.dto");
const user_model_1 = require("../models/user.model");
let VacancyResolver = (() => {
    let VacancyResolver = class VacancyResolver {
        constructor(vacancyService, companyService) {
            this.vacancyService = vacancyService;
            this.companyService = companyService;
        }
        async getAllVacanciesOfThisCutomer(user) {
            const customerId = user.customerId;
            return this.vacancyService.getAllVacanciesByCustomerId(customerId);
        }
        async getAllVacanciesOfAllCompanies() {
            return this.vacancyService.getAllVacancies();
        }
        async me(user) {
            return user;
        }
        async getVacancy(id) {
            const vacancy = await this.vacancyService.getOneVacancy(id);
            if (!vacancy) {
                throw new common_1.HttpException("vacancy not found", common_1.HttpStatus.NOT_FOUND);
            }
            return vacancy;
        }
        async createVacancy(input) {
            const newInput = new vacancy_dto_1.VacancyDto();
            newInput.company_id = input.company_id;
            newInput.description = input.description;
            newInput.expiredAt = input.expiredAt;
            newInput.title = input.title;
            return this.vacancyService.createOne(newInput);
        }
        async deleteOneVacancy(id) {
            return this.vacancyService.findOneAndRemove(id);
        }
        async updateOneVacancy(id, update) {
            const newInput = new vacancy_dto_1.VacancyDto();
            newInput.company_id = update.company_id;
            newInput.description = update.description;
            newInput.expiredAt = update.expiredAt;
            newInput.title = update.title;
            return this.vacancyService.findOneAndUpdate(id, update);
        }
        async company(vacancy) {
            const { company_id } = vacancy;
            return this.companyService.getOneCompany(company_id);
        }
    };
    __decorate([
        graphql_1.Query(() => [vacancy_model_1.Vacancy]),
        __param(0, graphql_1.Context('user')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [user_model_1.User]),
        __metadata("design:returntype", Promise)
    ], VacancyResolver.prototype, "getAllVacanciesOfThisCutomer", null);
    __decorate([
        graphql_1.Query(() => [vacancy_model_1.Vacancy]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], VacancyResolver.prototype, "getAllVacanciesOfAllCompanies", null);
    __decorate([
        graphql_1.Query(() => user_model_1.User),
        __param(0, graphql_1.Context('user')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [user_model_1.User]),
        __metadata("design:returntype", Promise)
    ], VacancyResolver.prototype, "me", null);
    __decorate([
        graphql_1.Query(() => vacancy_model_1.Vacancy),
        __param(0, graphql_1.Args('id', { type: () => String })),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], VacancyResolver.prototype, "getVacancy", null);
    __decorate([
        roles_decorator_1.Roles('admin'),
        graphql_1.Mutation(() => vacancy_model_1.Vacancy),
        __param(0, graphql_1.Args('input')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [vacancy_input_1.VacancyInput]),
        __metadata("design:returntype", Promise)
    ], VacancyResolver.prototype, "createVacancy", null);
    __decorate([
        roles_decorator_1.Roles('admin'),
        graphql_1.Mutation(() => vacancy_model_1.Vacancy),
        __param(0, graphql_1.Args('id', { type: () => String })),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], VacancyResolver.prototype, "deleteOneVacancy", null);
    __decorate([
        roles_decorator_1.Roles('admin'),
        graphql_1.Mutation(() => vacancy_model_1.Vacancy),
        __param(0, graphql_1.Args('id', { type: () => String })), __param(1, graphql_1.Args('update')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, vacancy_input_1.VacancyInput]),
        __metadata("design:returntype", Promise)
    ], VacancyResolver.prototype, "updateOneVacancy", null);
    __decorate([
        graphql_1.ResolveField(),
        __param(0, graphql_1.Parent()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [vacancy_model_1.Vacancy]),
        __metadata("design:returntype", Promise)
    ], VacancyResolver.prototype, "company", null);
    VacancyResolver = __decorate([
        common_1.UseGuards(roles_guard_1.RolesGuard, auth_guard_1.AuthGuard),
        graphql_1.Resolver(of => vacancy_model_1.Vacancy),
        __metadata("design:paramtypes", [vacancy_service_1.VacancyService,
            company_service_1.CompanyService])
    ], VacancyResolver);
    return VacancyResolver;
})();
exports.VacancyResolver = VacancyResolver;
//# sourceMappingURL=vacancy.resolver.js.map