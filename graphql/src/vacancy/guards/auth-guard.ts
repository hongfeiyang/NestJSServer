import { CanActivate, ExecutionContext, Inject, HttpException, HttpStatus } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { GqlExecutionContext } from "@nestjs/graphql";
import { JwtService } from "@nestjs/jwt";

export class AuthGuard implements CanActivate {

    constructor(@Inject('AUTH_CLIENT') private readonly client: ClientProxy, private readonly jwtService: JwtService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        // const req = context.switchToHttp().getRequest()
        
        const ctx = GqlExecutionContext.create(context).getContext()

        if (!ctx.headers.authorization) {
            return false
        }
        const token = ctx.headers.authorization.split(' ')[1]
        const tokenType = ctx.headers.authorization.split(' ')[0]

        if (tokenType != "Bearer") {
            throw new HttpException("invalid token type", HttpStatus.UNAUTHORIZED)
        }
        
        try {
            const res = await this.client.send(
                { role: 'auth', cmd: 'check' },
                { jwt: token }
            ).toPromise<boolean>();
            // attach user info to ctx to access in resolver
            ctx.user = this.jwtService.decode(token) as { [key: string]: any }

            return res;
        } catch (e) {
            console.log(e);
            return false;
        }
    }
    
}