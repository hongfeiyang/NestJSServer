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
const microservices_1 = require("@nestjs/microservices");
let VacancyService = (() => {
    var _a;
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
            try {
                const objectId = mongoose_2.Types.ObjectId(id);
                const res = await this.vacancyModel.findOne({ "_id": id }).exec();
                return res;
            }
            catch (e) {
                throw new microservices_1.RpcException(`${e}`);
            }
        }
        async findOneAndDelete(id) {
            try {
                const objectId = mongoose_2.Types.ObjectId(id);
                const res = await this.vacancyModel.findOneAndDelete({ "_id": id }).exec();
            }
            catch (e) {
                throw new microservices_1.RpcException(`${e}`);
            }
        }
        async findOneAndUpdate(id, data) {
            try {
                const objectId = mongoose_2.Types.ObjectId(id);
                const res = await this.vacancyModel.findOneAndUpdate({ "_id": id }, data).exec();
            }
            catch (e) {
                throw new microservices_1.RpcException(`${e}`);
            }
        }
        async removeAll() {
            return this.vacancyModel.find().remove().exec();
        }
    };
    VacancyService = __decorate([
        common_1.Injectable(),
        __param(0, mongoose_1.InjectModel(vacancy_schema_1.Vacancy.name)),
        __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
    ], VacancyService);
    return VacancyService;
})();
exports.VacancyService = VacancyService;
//# sourceMappingURL=vacancy.service.js.map