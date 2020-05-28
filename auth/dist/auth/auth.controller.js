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
exports.AuthController = void 0;
const auth_service_1 = require("./auth.service");
const common_1 = require("@nestjs/common");
const local_auth_guards_1 = require("./local-auth.guards");
const microservices_1 = require("@nestjs/microservices");
let AuthController = (() => {
    let AuthController = class AuthController {
        constructor(authService) {
            this.authService = authService;
        }
        async loginHttp(req) {
            console.log(req.user);
            return this.authService.login(req.user);
        }
        async loginMicroservice(data) {
            if (!data) {
                throw new common_1.HttpException("please provide user credential", common_1.HttpStatus.FORBIDDEN);
            }
            const user = await this.authService.validateUser(data.username, data.password);
            if (!user) {
                throw new common_1.HttpException("user not found", common_1.HttpStatus.FORBIDDEN);
            }
            console.log(user);
            return this.authService.login(user);
        }
        async isLoggedIn(data) {
            try {
                const res = this.authService.validateToken(data.jwt);
                return res;
            }
            catch (e) {
                console.log(e);
                return false;
            }
        }
    };
    __decorate([
        common_1.UseGuards(local_auth_guards_1.LocalAuthGuard),
        common_1.Post('auth'),
        __param(0, common_1.Req()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AuthController.prototype, "loginHttp", null);
    __decorate([
        microservices_1.MessagePattern({ role: 'auth', cmd: 'login' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AuthController.prototype, "loginMicroservice", null);
    __decorate([
        microservices_1.MessagePattern({ role: 'auth', cmd: 'check' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AuthController.prototype, "isLoggedIn", null);
    AuthController = __decorate([
        common_1.Controller(),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], AuthController);
    return AuthController;
})();
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map