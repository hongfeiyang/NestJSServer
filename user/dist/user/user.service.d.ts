import { Model } from "mongoose";
import { CreateUserDto } from "./create-user.dto";
import { User } from "./user.schema";
export declare class UserService {
    private userModel;
    constructor(userModel: Model<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOneById(id: string): Promise<User>;
    findOneByUsername(username: string): Promise<User>;
    findOneAndDelete(id: string): Promise<User>;
}
