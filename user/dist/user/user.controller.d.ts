import { UserService } from "./user.service";
import { CreateUserDto } from "./create-user.dto";
import { User } from "./user.schema";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    listUser(): Promise<User[]>;
    findOneAndDelete(id: string): Promise<User>;
    create(createUserDto: CreateUserDto): Promise<User>;
    getUserByUsername(username: string): Promise<User>;
    getUserById(id: string): Promise<User>;
}
