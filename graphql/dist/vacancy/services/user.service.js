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
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let UserService = (() => {
    let UserService = class UserService {
        constructor(client) {
            this.client = client;
        }
        async createUser(user) {
            return this.client.send({ role: 'user', cmd: 'create' }, user).toPromise();
        }
        async findOneById(id) {
            return this.client.send({ role: 'user', cmd: 'getById' }, id).toPromise();
        }
        async findOneAndDelete(id) {
            return this.client.send({ role: 'user', cmd: 'delete' }, id).toPromise();
        }
        async getAll() {
            return this.client.send({ role: 'user', cmd: 'getAll' }, {}).toPromise();
        }
    };
    UserService = __decorate([
        common_1.Injectable(),
        __param(0, common_1.Inject('USER_CLIENT')),
        __metadata("design:paramtypes", [microservices_1.ClientProxy])
    ], UserService);
    return UserService;
})();
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map