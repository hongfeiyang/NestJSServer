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
exports.CompanyResolver = void 0;
const company_model_1 = require("../models/company.model");
const company_service_1 = require("../services/company.service");
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const company_dto_1 = require("../dto/company.dto");
const company_input_1 = require("../models/company.input");
let CompanyResolver = (() => {
    let CompanyResolver = class CompanyResolver {
        constructor(companyService) {
            this.companyService = companyService;
        }
        async getCompany(id) {
            const item = await this.companyService.getOneCompany(id).catch(e => {
                throw new common_1.HttpException(e, common_1.HttpStatus.NOT_FOUND);
            });
            return item;
        }
        async getAllCompanies() {
            const items = await this.companyService.getAllCompanies().catch(e => {
                throw new common_1.HttpException(e, common_1.HttpStatus.NOT_FOUND);
            });
            return items;
        }
        async createCompany(input) {
            const companyDto = new company_dto_1.CompanyDto();
            companyDto.name = input.name;
            companyDto.address = input.address;
            return this.companyService.createCompany(companyDto);
        }
        async deleteOneCompany(id) {
            return this.companyService.deleteOneCompany(id);
        }
    };
    __decorate([
        graphql_1.Query(() => company_model_1.Company),
        __param(0, graphql_1.Args('id', { type: () => String })),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], CompanyResolver.prototype, "getCompany", null);
    __decorate([
        graphql_1.Query(() => [company_model_1.Company]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], CompanyResolver.prototype, "getAllCompanies", null);
    __decorate([
        graphql_1.Mutation(() => company_model_1.Company),
        __param(0, graphql_1.Args('input')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [company_input_1.CompanyInput]),
        __metadata("design:returntype", Promise)
    ], CompanyResolver.prototype, "createCompany", null);
    __decorate([
        graphql_1.Mutation(() => company_model_1.Company),
        __param(0, graphql_1.Args('id', { type: () => String })),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], CompanyResolver.prototype, "deleteOneCompany", null);
    CompanyResolver = __decorate([
        graphql_1.Resolver(of => company_model_1.Company),
        __metadata("design:paramtypes", [company_service_1.CompanyService])
    ], CompanyResolver);
    return CompanyResolver;
})();
exports.CompanyResolver = CompanyResolver;
//# sourceMappingURL=company.resolvers.js.map