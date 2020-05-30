import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { VacancyResolver } from './resolvers/vacancy.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { VacancyService } from './services/vacancy.service';
import { CompanyService } from './services/company.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './services/auth.services';
import { AuthResolver } from './resolvers/auth.resolver';
import { CompanyResolver } from './resolvers/company.resolvers';
import { UserResolver } from './resolvers/user.resolver';
import { UserService } from './services/user.service';

@Module({
  providers: [VacancyResolver, CompanyResolver, AuthResolver, UserResolver, VacancyService, CompanyService, AuthService, UserService],
  imports: [
    GraphQLModule.forRoot({
      playground: true,
      debug: true,
      autoSchemaFile: 'schema.gql',
      typePaths: ['./**/*.graphql'],
      context: ({req}) => ({headers: req.headers}),
    }),
    JwtModule.register({ secret: 'secret' }),
    ClientsModule.register(
        [
            {
                name: 'USER_CLIENT',
                transport: Transport.TCP,
                options: {
                    host: "user",
                    port: 3000
                }
            },
            {
                name: 'AUTH_CLIENT',
                transport: Transport.TCP,
                options: {
                    host: "auth",
                    port: 3001
                }
            },
            {
                name: 'VACANCY_CLIENT',
                transport: Transport.TCP,
                options: {
                    host: "vacancy",
                    port: 3003
                }
            },
            {
                name: 'COMPANY_CLIENT',
                transport: Transport.TCP,
                options: {
                    host: "company",
                    port: 3004
                }
            }
        ]
    )
  ],
})
export class VacancyModule {}
