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
exports.CompanyController = void 0;
const common_1 = require("@nestjs/common");
const company_service_1 = require("./company.service");
const company_dto_1 = require("./company.dto");
const microservices_1 = require("@nestjs/microservices");
let CompanyController = (() => {
    let CompanyController = class CompanyController {
        constructor(compancyService) {
            this.compancyService = compancyService;
        }
        createCompany(data) {
            return this.compancyService.create(data);
        }
        getCompanies() {
            return this.compancyService.findAll();
        }
        getOneCompany(id) {
            return this.compancyService.findOne(id);
        }
        deleteOneCompany(id) {
            return this.compancyService.findOneAndDelete(id);
        }
    };
    __decorate([
        microservices_1.MessagePattern({ role: 'company', cmd: 'create' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [company_dto_1.createCompanyDto]),
        __metadata("design:returntype", void 0)
    ], CompanyController.prototype, "createCompany", null);
    __decorate([
        microservices_1.MessagePattern({ role: 'company', cmd: 'getAll' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CompanyController.prototype, "getCompanies", null);
    __decorate([
        microservices_1.MessagePattern({ role: 'company', cmd: 'getOne' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], CompanyController.prototype, "getOneCompany", null);
    __decorate([
        microservices_1.MessagePattern({ role: 'company', cmd: 'delete' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], CompanyController.prototype, "deleteOneCompany", null);
    CompanyController = __decorate([
        common_1.Controller('/company'),
        __metadata("design:paramtypes", [company_service_1.CompanyService])
    ], CompanyController);
    return CompanyController;
})();
exports.CompanyController = CompanyController;
//# sourceMappingURL=company.controller.js.map