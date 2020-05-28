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
exports.RolesGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const jwt_1 = require("@nestjs/jwt");
const graphql_1 = require("@nestjs/graphql");
let RolesGuard = (() => {
    let RolesGuard = class RolesGuard {
        constructor(reflector, jwtService) {
            this.reflector = reflector;
            this.jwtService = jwtService;
        }
        canActivate(context) {
            const roles = this.reflector.get('roles', context.getHandler());
            if (!roles) {
                return true;
            }
            const ctx = graphql_1.GqlExecutionContext.create(context).getContext();
            if (!ctx.headers.authorization) {
                return false;
            }
            const jwt = ctx.headers.authorization.split(' ')[1];
            if (!jwt) {
                return false;
            }
            const user = this.jwtService.decode(jwt);
            if (!user) {
                return false;
            }
            console.log(`roles allowed {${roles}}, ${user.username} is ${user.role}`);
            return this.matchRoles(roles, user.role);
        }
        matchRoles(roles, userRole) {
            return roles.includes(userRole);
        }
    };
    RolesGuard = __decorate([
        common_1.Injectable(),
        __metadata("design:paramtypes", [core_1.Reflector,
            jwt_1.JwtService])
    ], RolesGuard);
    return RolesGuard;
})();
exports.RolesGuard = RolesGuard;
//# sourceMappingURL=roles.guard.js.map