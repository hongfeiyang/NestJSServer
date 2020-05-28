import { AuthService } from "./services/authentication.services";
import { LoginInput } from "./models/login.input";
export declare class AuthResolver {
    private authService;
    constructor(authService: AuthService);
    login(input: LoginInput): Promise<any>;
}
