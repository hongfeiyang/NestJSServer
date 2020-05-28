import { ClientProxy } from "@nestjs/microservices";
import { User } from "../models/user.model";
import { UserDto } from "../dto/user.dto";
export declare class UserService {
    private readonly client;
    constructor(client: ClientProxy);
    createUser(user: UserDto): Promise<User>;
    findOneById(id: string): Promise<User>;
    findOneAndDelete(id: string): Promise<User>;
    getAll(): Promise<User[]>;
}
