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
exports.AuthResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const login_model_1 = require("./models/login.model");
const authentication_services_1 = require("./services/authentication.services");
const login_input_1 = require("./models/login.input");
let AuthResolver = (() => {
    let AuthResolver = class AuthResolver {
        constructor(authService) {
            this.authService = authService;
        }
        async login(input) {
            return this.authService.login(input.username, input.password);
        }
    };
    __decorate([
        graphql_1.Query(() => login_model_1.AccessToken),
        __param(0, graphql_1.Args('credentials')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [login_input_1.LoginInput]),
        __metadata("design:returntype", Promise)
    ], AuthResolver.prototype, "login", null);
    AuthResolver = __decorate([
        graphql_1.Resolver(of => login_model_1.AccessToken),
        __metadata("design:paramtypes", [authentication_services_1.AuthService])
    ], AuthResolver);
    return AuthResolver;
})();
exports.AuthResolver = AuthResolver;
//# sourceMappingURL=auth.resolver.js.map