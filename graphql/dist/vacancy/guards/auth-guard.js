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
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const graphql_1 = require("@nestjs/graphql");
const jwt_1 = require("@nestjs/jwt");
let AuthGuard = (() => {
    let AuthGuard = class AuthGuard {
        constructor(client, jwtService) {
            this.client = client;
            this.jwtService = jwtService;
        }
        async canActivate(context) {
            const ctx = graphql_1.GqlExecutionContext.create(context).getContext();
            if (!ctx.headers.authorization) {
                return false;
            }
            const token = ctx.headers.authorization.split(' ')[1];
            const tokenType = ctx.headers.authorization.split(' ')[0];
            if (tokenType != "Bearer") {
                throw new common_1.HttpException("invalid token type", common_1.HttpStatus.UNAUTHORIZED);
            }
            try {
                const res = await this.client.send({ role: 'auth', cmd: 'check' }, { jwt: token }).toPromise();
                ctx.user = this.jwtService.decode(token);
                return res;
            }
            catch (e) {
                console.log(e);
                return false;
            }
        }
    };
    AuthGuard = __decorate([
        __param(0, common_1.Inject('AUTH_CLIENT')),
        __metadata("design:paramtypes", [microservices_1.ClientProxy, jwt_1.JwtService])
    ], AuthGuard);
    return AuthGuard;
})();
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth-guard.js.map