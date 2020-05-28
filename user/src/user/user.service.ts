import { InjectModel } from "@nestjs/mongoose";
import { Model, MongooseFilterQuery } from "mongoose";
import { CreateUserDto } from "./create-user.dto";
import { User } from "./user.schema";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async create(createUserDto: CreateUserDto): Promise<User> {
        const newUser = new this.userModel(createUserDto);
        return newUser.save()
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async findOneById(id: string): Promise<User> {
        return this.userModel.findOne({"_id": id}).exec();
    }

    async findOneByUsername(username: string): Promise<User> {
        return this.userModel.findOne({"username": username}).exec();
    }

    async findOneAndDelete(id: string): Promise<User> {
        return this.userModel.findOneAndDelete({"_id": id}).exec();
    }
}