import { Controller, Get, Post, Body, UseGuards, Delete, HttpException, HttpStatus } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./create-user.dto";
import { MessagePattern } from "@nestjs/microservices";
import { User } from "./user.schema";


@Controller()
export class UserController {

    constructor(private readonly userService: UserService) {}

    @MessagePattern({role: 'user', cmd: 'getAll'})
    async listUser(): Promise<User[]> {
        return this.userService.findAll();
    }

    @MessagePattern({role: 'user', cmd: 'delete'})
    async findOneAndDelete(id: string): Promise<User> {
        return this.userService.findOneAndDelete(id);
    }

    @MessagePattern({role: 'user', cmd: 'create'})
    async create(createUserDto: CreateUserDto): Promise<User> {
        return this.userService.create(createUserDto)
    }

    @MessagePattern({role: 'user', cmd: 'getByUsername'})
    async getUserByUsername(username: string): Promise<User> {
        return this.userService.findOneByUsername(username);
    }


    @MessagePattern({role: 'user', cmd: 'getById'})
    async getUserById(id: string): Promise<User> {
        return this.userService.findOneById(id);
    }
}