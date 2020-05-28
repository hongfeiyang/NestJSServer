import { AuthService } from "./auth.service";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    loginHttp(req: any): Promise<{
        user: any;
        accessToken: string;
    }>;
    loginMicroservice(data: {
        username: string;
        password: string;
    }): Promise<{
        user: any;
        accessToken: string;
    }>;
    isLoggedIn(data: any): Promise<any>;
}
