import { ClientProxy } from "@nestjs/microservices";
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly client;
    private readonly jwtService;
    constructor(client: ClientProxy, jwtService: JwtService);
    onApplicationBootstrap(): Promise<void>;
    validateUser(username: string, password: string): Promise<any>;
    login(user: any): Promise<{
        user: any;
        accessToken: string;
    }>;
    validateToken(jwt: string): any;
}
