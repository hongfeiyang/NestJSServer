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
exports.CompanyService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let CompanyService = (() => {
    let CompanyService = class CompanyService {
        constructor(companyClient) {
            this.companyClient = companyClient;
        }
        async onApplicationBootstrap() {
            await this.companyClient.connect();
        }
        async getOneCompany(id) {
            return this.companyClient.send({ role: 'company', cmd: 'find' }, id).toPromise();
        }
    };
    CompanyService = __decorate([
        common_1.Injectable(),
        __param(0, common_1.Inject('COMPANY_CLIENT')),
        __metadata("design:paramtypes", [microservices_1.ClientProxy])
    ], CompanyService);
    return CompanyService;
})();
exports.CompanyService = CompanyService;
//# sourceMappingURL=company.service.js.map