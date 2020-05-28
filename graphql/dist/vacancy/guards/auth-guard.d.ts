import { CanActivate, ExecutionContext } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { JwtService } from "@nestjs/jwt";
export declare class AuthGuard implements CanActivate {
    private readonly client;
    private readonly jwtService;
    constructor(client: ClientProxy, jwtService: JwtService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
