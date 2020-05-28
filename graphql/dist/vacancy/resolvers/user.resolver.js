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
exports.UserResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const user_service_1 = require("../services/user.service");
const user_model_1 = require("../models/user.model");
const user_dto_1 = require("../dto/user.dto");
const user_input_1 = require("../models/user.input");
let UserResolver = (() => {
    let UserResolver = class UserResolver {
        constructor(userService) {
            this.userService = userService;
        }
        async getUser(id) {
            const item = await this.userService.findOneById(id).catch(e => {
                throw new common_1.HttpException(e, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            });
            return item;
        }
        async getAllUsers() {
            const items = await this.userService.getAll().catch(e => {
                throw new common_1.HttpException(e, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            });
            return items;
        }
        async createUser(input) {
            const userDto = new user_dto_1.UserDto();
            userDto.name = input.name;
            userDto.username = input.username;
            userDto.password = input.password;
            userDto.role = input.role;
            userDto.customerId = input.customerId;
            return this.userService.createUser(userDto);
        }
        async deleteOneUser(id) {
            return this.userService.findOneAndDelete(id);
        }
    };
    __decorate([
        graphql_1.Query(() => user_model_1.User),
        __param(0, graphql_1.Args('id', { type: () => String })),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], UserResolver.prototype, "getUser", null);
    __decorate([
        graphql_1.Query(() => [user_model_1.User]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], UserResolver.prototype, "getAllUsers", null);
    __decorate([
        graphql_1.Mutation(() => user_model_1.User),
        __param(0, graphql_1.Args('input')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [user_input_1.UserInput]),
        __metadata("design:returntype", Promise)
    ], UserResolver.prototype, "createUser", null);
    __decorate([
        graphql_1.Mutation(() => user_model_1.User),
        __param(0, graphql_1.Args('id', { type: () => String })),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], UserResolver.prototype, "deleteOneUser", null);
    UserResolver = __decorate([
        graphql_1.Resolver(),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], UserResolver);
    return UserResolver;
})();
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map