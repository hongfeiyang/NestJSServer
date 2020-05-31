import { AuthService } from "./auth.service";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    loginMicroservice(data: {
        username: string;
        password: string;
    }): unknown;
    isLoggedIn(data: any): unknown;
}
