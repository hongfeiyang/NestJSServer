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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VacancyController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const create_vacancy_dto_1 = require("./create-vacancy.dto");
const vacancy_service_1 = require("./vacancy.service");
let VacancyController = (() => {
    let VacancyController = class VacancyController {
        constructor(vacancyService) {
            this.vacancyService = vacancyService;
        }
        getVacancies() {
            return this.vacancyService.findAll();
        }
        getVacanciesByCutomerId(customerId) {
            if (!customerId) {
                throw new common_1.HttpException("customerId must not be null", common_1.HttpStatus.BAD_REQUEST);
            }
            return this.vacancyService.findAllByCustomerId(customerId);
        }
        getOneVacancy(id) {
            if (!id) {
                throw new common_1.HttpException("id must not be null", common_1.HttpStatus.BAD_REQUEST);
            }
            return this.vacancyService.findOne(id);
        }
        createVacancy(data) {
            if (!data) {
                throw new common_1.HttpException("no data received", common_1.HttpStatus.BAD_REQUEST);
            }
            return this.vacancyService.create(data);
        }
        updateVacancy(data) {
            if (!data || !data.update || !data.id) {
                throw new common_1.HttpException("id and update must not be null", common_1.HttpStatus.BAD_REQUEST);
            }
            return this.vacancyService.findOneAndUpdate(data.id, data.update);
        }
        removeVacancy(id) {
            if (!id) {
                throw new common_1.HttpException("id must not be null", common_1.HttpStatus.BAD_REQUEST);
            }
            return this.vacancyService.findOneAndDelete(id);
        }
    };
    __decorate([
        microservices_1.MessagePattern({
            role: 'vacancy',
            cmd: 'getAll'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], VacancyController.prototype, "getVacancies", null);
    __decorate([
        microservices_1.MessagePattern({
            role: 'vacancy',
            cmd: 'getAllByCustomerId'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], VacancyController.prototype, "getVacanciesByCutomerId", null);
    __decorate([
        microservices_1.MessagePattern({
            role: 'vacancy',
            cmd: 'getOne'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], VacancyController.prototype, "getOneVacancy", null);
    __decorate([
        microservices_1.MessagePattern({
            role: 'vacancy',
            cmd: 'create'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_vacancy_dto_1.createVacancyDto]),
        __metadata("design:returntype", void 0)
    ], VacancyController.prototype, "createVacancy", null);
    __decorate([
        microservices_1.MessagePattern({
            role: 'vacancy',
            cmd: 'update'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], VacancyController.prototype, "updateVacancy", null);
    __decorate([
        microservices_1.MessagePattern({
            role: 'vacancy',
            cmd: 'remove'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], VacancyController.prototype, "removeVacancy", null);
    VacancyController = __decorate([
        common_1.Controller('/vacancy'),
        __metadata("design:paramtypes", [vacancy_service_1.VacancyService])
    ], VacancyController);
    return VacancyController;
})();
exports.VacancyController = VacancyController;
//# sourceMappingURL=vacancy.controller.js.map