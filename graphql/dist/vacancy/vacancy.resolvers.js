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
exports.VacancyResolvers = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const graphql_subscriptions_1 = require("graphql-subscriptions");
const vacancy_guard_1 = require("./vacancy.guard");
const vacancy_service_1 = require("./vacancy.service");
const create_vacancy_dto_1 = require("./create-vacancy.dto");
const pubSub = new graphql_subscriptions_1.PubSub();
let VacancyResolvers = (() => {
    let VacancyResolvers = class VacancyResolvers {
        constructor(vacancyService) {
            this.vacancyService = vacancyService;
        }
        async getCats() {
            return this.vacancyService.findAll();
        }
        async findOneById(id) {
            return this.vacancyService.findOneById(id);
        }
        async create(args) {
            const createdCat = await this.vacancyService.create(args);
            pubSub.publish('catCreated', { catCreated: createdCat });
            return createdCat;
        }
        catCreated() {
            return pubSub.asyncIterator('catCreated');
        }
    };
    __decorate([
        graphql_1.Query(),
        common_1.UseGuards(vacancy_guard_1.VacancyGuard),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], VacancyResolvers.prototype, "getCats", null);
    __decorate([
        graphql_1.Query('vacancy'),
        __param(0, graphql_1.Args('id', common_1.ParseIntPipe)),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], VacancyResolvers.prototype, "findOneById", null);
    __decorate([
        graphql_1.Mutation('createVacancy'),
        __param(0, graphql_1.Args('createCatInput')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_vacancy_dto_1.CreateVacancyDto]),
        __metadata("design:returntype", Promise)
    ], VacancyResolvers.prototype, "create", null);
    __decorate([
        graphql_1.Subscription('catCreated'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], VacancyResolvers.prototype, "catCreated", null);
    VacancyResolvers = __decorate([
        graphql_1.Resolver('Vacancy'),
        __metadata("design:paramtypes", [vacancy_service_1.VacancyService])
    ], VacancyResolvers);
    return VacancyResolvers;
})();
exports.VacancyResolvers = VacancyResolvers;
//# sourceMappingURL=vacancy.resolvers.js.map