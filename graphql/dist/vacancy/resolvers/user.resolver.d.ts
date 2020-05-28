import { UserService } from "../services/user.service";
import { User } from "../models/user.model";
import { UserInput } from "../models/user.input";
export declare class UserResolver {
    private userService;
    constructor(userService: UserService);
    getUser(id: string): Promise<User>;
    getAllUsers(): Promise<User[]>;
    createUser(input: UserInput): Promise<User>;
    deleteOneUser(id: string): Promise<User>;
}
