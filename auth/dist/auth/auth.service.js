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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const jwt_1 = require("@nestjs/jwt");
let AuthService = (() => {
    let AuthService = class AuthService {
        constructor(client, jwtService) {
            this.client = client;
            this.jwtService = jwtService;
        }
        async onApplicationBootstrap() {
            await this.client.connect();
        }
        async validateUser(username, password) {
            try {
                const user = await this.client.send({ role: 'user', cmd: 'getByUsername' }, username).toPromise();
                console.log(`password: ${user === null || user === void 0 ? void 0 : user.password}, stored password: ${password}`);
                if (password === (user === null || user === void 0 ? void 0 : user.password)) {
                    return user;
                }
                return null;
            }
            catch (e) {
                console.log(e);
                throw e;
            }
        }
        async login(user) {
            return {
                user: user._id,
                accessToken: this.jwtService.sign(user)
            };
        }
        validateToken(jwt) {
            return this.jwtService.verify(jwt);
        }
    };
    AuthService = __decorate([
        common_1.Injectable(),
        __param(0, common_1.Inject('USER_CLIENT')),
        __metadata("design:paramtypes", [microservices_1.ClientProxy, jwt_1.JwtService])
    ], AuthService);
    return AuthService;
})();
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map