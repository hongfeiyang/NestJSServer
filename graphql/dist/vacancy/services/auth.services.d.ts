import { ClientProxy } from '@nestjs/microservices';
export declare class AuthService {
    private readonly client;
    constructor(client: ClientProxy);
    login(username: string, password: string): Promise<any>;
}
