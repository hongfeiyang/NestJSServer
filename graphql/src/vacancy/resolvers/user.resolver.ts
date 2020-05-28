import { HttpException, HttpStatus } from "@nestjs/common"
import { Resolver, Mutation, Args, Query  } from "@nestjs/graphql"
import { UserService } from "../services/user.service"
import { User } from "../models/user.model"
import { UserDto } from "../dto/user.dto"
import { UserInput } from "../models/user.input"

@Resolver()
export class UserResolver {
    constructor(
        private userService: UserService
    ) {}
    

    @Query(() => User)
    async getUser(@Args('id', { type: () => String }) id: string) {
        const item = await this.userService.findOneById(id).catch(e => {
            throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR) 
        })
        return item
    }

    @Query(() => [User])
    async getAllUsers() {
        const items = await this.userService.getAll().catch(e => {
            throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR) 
        })
        return items
    }

    @Mutation(() => User)
    async createUser(@Args('input') input: UserInput) {
        const userDto = new UserDto()
        userDto.name = input.name
        userDto.username = input.username
        userDto.password = input.password
        userDto.role = input.role
        userDto.customerId = input.customerId
        return this.userService.createUser(userDto)
    }

    @Mutation(() => User)
    async deleteOneUser(@Args('id', { type: () => String }) id: string) {
        return this.userService.findOneAndDelete(id)
    }
}