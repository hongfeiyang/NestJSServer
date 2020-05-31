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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const create_user_dto_1 = require("./create-user.dto");
const microservices_1 = require("@nestjs/microservices");
let UserController = (() => {
    var _a, _b, _c, _d, _e;
    let UserController = class UserController {
        constructor(userService) {
            this.userService = userService;
        }
        async listUser() {
            return this.userService.findAll();
        }
        async findOneAndDelete(id) {
            return this.userService.findOneAndDelete(id);
        }
        async create(createUserDto) {
            return this.userService.create(createUserDto);
        }
        async getUserByUsername(username) {
            return this.userService.findOneByUsername(username);
        }
        async getUserById(id) {
            return this.userService.findOneById(id);
        }
    };
    __decorate([
        microservices_1.MessagePattern({ role: 'user', cmd: 'getAll' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
    ], UserController.prototype, "listUser", null);
    __decorate([
        microservices_1.MessagePattern({ role: 'user', cmd: 'delete' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
    ], UserController.prototype, "findOneAndDelete", null);
    __decorate([
        microservices_1.MessagePattern({ role: 'user', cmd: 'create' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
        __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
    ], UserController.prototype, "create", null);
    __decorate([
        microservices_1.MessagePattern({ role: 'user', cmd: 'getByUsername' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
    ], UserController.prototype, "getUserByUsername", null);
    __decorate([
        microservices_1.MessagePattern({ role: 'user', cmd: 'getById' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
    ], UserController.prototype, "getUserById", null);
    UserController = __decorate([
        common_1.Controller(),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], UserController);
    return UserController;
})();
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map