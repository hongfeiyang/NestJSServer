"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VacancyModule = void 0;
const common_1 = require("@nestjs/common");
const vacancy_service_1 = require("./vacancy.service");
const vacancy_controller_1 = require("./vacancy.controller");
const vacancy_schema_1 = require("./vacancy.schema");
const mongoose_1 = require("@nestjs/mongoose");
const jwt_1 = require("@nestjs/jwt");
let VacancyModule = (() => {
    let VacancyModule = class VacancyModule {
    };
    VacancyModule = __decorate([
        common_1.Module({
            providers: [vacancy_service_1.VacancyService],
            controllers: [vacancy_controller_1.VacancyController],
            imports: [
                mongoose_1.MongooseModule.forFeature([{ name: vacancy_schema_1.Vacancy.name, schema: vacancy_schema_1.VacancySchema }]),
                jwt_1.JwtModule.register({ secret: 'secret' })
            ]
        })
    ], VacancyModule);
    return VacancyModule;
})();
exports.VacancyModule = VacancyModule;
//# sourceMappingURL=vacancy.module.js.map