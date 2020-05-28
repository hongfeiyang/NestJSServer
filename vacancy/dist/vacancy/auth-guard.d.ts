import { CanActivate, ExecutionContext } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
export declare class AuthGuard implements CanActivate {
    private readonly client;
    constructor(client: ClientProxy);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
