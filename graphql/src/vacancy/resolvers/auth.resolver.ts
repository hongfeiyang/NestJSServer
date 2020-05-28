import { Resolver, Mutation, Args, Query } from "@nestjs/graphql";

import { AccessToken } from "../models/login.model";
import { AuthService } from "../services/auth.services";
import { LoginInput } from "../models/login.input";

@Resolver(of => AccessToken)
export class AuthResolver {
    constructor(private authService: AuthService) {}

    @Query(() => AccessToken)
    async login(@Args('credentials') input: LoginInput ) {
        return this.authService.login(input.username, input.password)
    }
}