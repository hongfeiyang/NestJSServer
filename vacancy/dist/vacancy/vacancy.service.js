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
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const vacancy_schema_1 = require("./vacancy.schema");
let VacancyService = (() => {
    let VacancyService = class VacancyService {
        constructor(vacancyModel) {
            this.vacancyModel = vacancyModel;
        }
        async create(data) {
            const newItem = new this.vacancyModel(data);
            return newItem.save();
        }
        async findAllByCustomerId(customerId) {
            return this.vacancyModel.find({ company_id: customerId }).exec();
        }
        async findAll() {
            return this.vacancyModel.find().exec();
        }
        async findOne(id) {
            const item = await this.vacancyModel.findOne({ "_id": id }).exec();
            return item;
        }
        async findOneAndDelete(id) {
            return this.vacancyModel.findOneAndDelete({ "_id": id }).exec();
        }
        async findOneAndUpdate(id, data) {
            return this.vacancyModel.findOneAndUpdate({ "_id": id }, data).exec();
        }
        async removeAll() {
            return this.vacancyModel.find().remove().exec();
        }
    };
    VacancyService = __decorate([
        common_1.Injectable(),
        __param(0, mongoose_1.InjectModel(vacancy_schema_1.Vacancy.name)),
        __metadata("design:paramtypes", [mongoose_2.Model])
    ], VacancyService);
    return VacancyService;
})();
exports.VacancyService = VacancyService;
//# sourceMappingURL=vacancy.service.js.map