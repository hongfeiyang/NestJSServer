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
exports.UserService = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("./user.schema");
const common_1 = require("@nestjs/common");
let UserService = (() => {
    var _a;
    let UserService = class UserService {
        constructor(userModel) {
            this.userModel = userModel;
        }
        async create(createUserDto) {
            const newUser = new this.userModel(createUserDto);
            return newUser.save();
        }
        async findAll() {
            return this.userModel.find().exec();
        }
        async findOneById(id) {
            return this.userModel.findOne({ "_id": id }).exec();
        }
        async findOneByUsername(username) {
            return this.userModel.findOne({ "username": username }).exec();
        }
        async findOneAndDelete(id) {
            return this.userModel.findOneAndDelete({ "_id": id }).exec();
        }
    };
    UserService = __decorate([
        common_1.Injectable(),
        __param(0, mongoose_1.InjectModel(user_schema_1.User.name)),
        __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
    ], UserService);
    return UserService;
})();
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map