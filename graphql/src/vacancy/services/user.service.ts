import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { User } from "../models/user.model";
import { UserDto } from "../dto/user.dto";

@Injectable()
export class UserService {
    constructor(@Inject('USER_CLIENT') private readonly client: ClientProxy ) {}

    async createUser(user: UserDto): Promise<User> {
        return this.client.send({ role: 'user', cmd: 'create' }, user).toPromise()
    }

    async findOneById(id: string): Promise<User> {
        return this.client.send({ role: 'user', cmd: 'getById' }, id).toPromise()
    }

    async findOneAndDelete(id: string): Promise<User> {
        return this.client.send({ role: 'user', cmd: 'delete' }, id).toPromise()
    }

    async getAll(): Promise<User[]> {
        return this.client.send({ role: 'user', cmd: 'getAll' }, {}).toPromise()
    }
}