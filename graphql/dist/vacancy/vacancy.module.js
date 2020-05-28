"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VacancyModule = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const vacancy_resolver_1 = require("./resolvers/vacancy.resolver");
const graphql_1 = require("@nestjs/graphql");
const vacancy_service_1 = require("./services/vacancy.service");
const company_service_1 = require("./services/company.service");
const jwt_1 = require("@nestjs/jwt");
const auth_services_1 = require("./services/auth.services");
const auth_resolver_1 = require("./resolvers/auth.resolver");
const company_resolvers_1 = require("./resolvers/company.resolvers");
const user_resolver_1 = require("./resolvers/user.resolver");
const user_service_1 = require("./services/user.service");
let VacancyModule = (() => {
    let VacancyModule = class VacancyModule {
    };
    VacancyModule = __decorate([
        common_1.Module({
            providers: [vacancy_resolver_1.VacancyResolver, company_resolvers_1.CompanyResolver, auth_resolver_1.AuthResolver, user_resolver_1.UserResolver, vacancy_service_1.VacancyService, company_service_1.CompanyService, auth_services_1.AuthService, user_service_1.UserService],
            imports: [
                graphql_1.GraphQLModule.forRoot({
                    playground: true,
                    debug: true,
                    autoSchemaFile: 'schema.gql',
                    typePaths: ['./**/*.graphql'],
                    context: ({ req }) => ({ headers: req.headers }),
                }),
                jwt_1.JwtModule.register({ secret: 'secret' }),
                microservices_1.ClientsModule.register([
                    {
                        name: 'USER_CLIENT',
                        transport: microservices_1.Transport.TCP,
                        options: {
                            host: "localhost",
                            port: 3000
                        }
                    },
                    {
                        name: 'AUTH_CLIENT',
                        transport: microservices_1.Transport.TCP,
                        options: {
                            host: "localhost",
                            port: 3001
                        }
                    },
                    {
                        name: 'VACANCY_CLIENT',
                        transport: microservices_1.Transport.TCP,
                        options: {
                            host: "localhost",
                            port: 3003
                        }
                    },
                    {
                        name: 'COMPANY_CLIENT',
                        transport: microservices_1.Transport.TCP,
                        options: {
                            host: "localhost",
                            port: 3004
                        }
                    }
                ])
            ],
        })
    ], VacancyModule);
    return VacancyModule;
})();
exports.VacancyModule = VacancyModule;
//# sourceMappingURL=vacancy.module.js.map