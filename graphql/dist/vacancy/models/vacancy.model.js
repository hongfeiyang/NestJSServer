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
exports.Vacancy = void 0;
const graphql_1 = require("@nestjs/graphql");
const company_model_1 = require("./company.model");
let Vacancy = (() => {
    let Vacancy = class Vacancy {
    };
    __decorate([
        graphql_1.Field(type => graphql_1.ID),
        __metadata("design:type", String)
    ], Vacancy.prototype, "_id", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], Vacancy.prototype, "title", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], Vacancy.prototype, "description", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], Vacancy.prototype, "expiredAt", void 0);
    __decorate([
        graphql_1.Field(type => graphql_1.ID),
        __metadata("design:type", String)
    ], Vacancy.prototype, "company_id", void 0);
    __decorate([
        graphql_1.Field(type => company_model_1.Company),
        __metadata("design:type", company_model_1.Company)
    ], Vacancy.prototype, "company", void 0);
    Vacancy = __decorate([
        graphql_1.ObjectType()
    ], Vacancy);
    return Vacancy;
})();
exports.Vacancy = Vacancy;
//# sourceMappingURL=vacancy.model.js.map