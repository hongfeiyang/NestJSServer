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
exports.VacancyService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let VacancyService = (() => {
    let VacancyService = class VacancyService {
        constructor(vacancyClient) {
            this.vacancyClient = vacancyClient;
        }
        async getAllVacanciesByCustomerId(customerId) {
            return this.vacancyClient.send({ role: 'vacancy', cmd: 'getAllByCustomerId' }, customerId).toPromise();
        }
        async getAllVacancies() {
            return this.vacancyClient.send({ role: 'vacancy', cmd: 'getAll' }, {}).toPromise();
        }
        async getOneVacancy(id) {
            return this.vacancyClient.send({ role: 'vacancy', cmd: 'getOne' }, id).toPromise();
        }
        async findOneAndRemove(id) {
            const res = await this.vacancyClient.send({ role: 'vacancy', cmd: 'remove' }, id).toPromise();
            if (res) {
                return "success";
            }
            else {
                return "failed";
            }
        }
        async findOneAndUpdate(id, update) {
            const res = await this.vacancyClient.send({ role: 'vacancy', cmd: 'update' }, { "id": id, "update": update }).toPromise();
            if (res) {
                return "success";
            }
            else {
                return "failed";
            }
        }
        async createOne(data) {
            return this.vacancyClient.send({ role: 'vacancy', cmd: 'create' }, data).toPromise();
        }
    };
    VacancyService = __decorate([
        common_1.Injectable(),
        __param(0, common_1.Inject('VACANCY_CLIENT')),
        __metadata("design:paramtypes", [microservices_1.ClientProxy])
    ], VacancyService);
    return VacancyService;
})();
exports.VacancyService = VacancyService;
//# sourceMappingURL=vacancy.service.js.map