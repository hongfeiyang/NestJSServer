import { AuthService } from "./auth.service";
import { UseGuards, Post, Request, Controller, Get, Body, Req, UnauthorizedException, HttpException, HttpStatus } from "@nestjs/common";
import { LocalAuthGuard } from "./local-auth.guards";
import { MessagePattern, RpcException } from "@nestjs/microservices";

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    // @UseGuards(LocalAuthGuard)
    // @Post('auth')
    // async loginHttp(@Req() req: any) {
    //     console.log(req.user)
    //     return this.authService.login(req.user);
    // }

    @MessagePattern({role: 'auth', cmd: 'login'})
    async loginMicroservice(data: {username: string, password: string}) {
        if (!data) {throw new RpcException("please provide user credential")}
        const user = await this.authService.validateUser(data.username, data.password)
        if (!user) {throw new RpcException("user not found")}
        console.log(user)
        return this.authService.login(user)
    }

    @MessagePattern({role: 'auth', cmd: 'check'})
    async isLoggedIn(data) {
        try {
            const res = this.authService.validateToken(data.jwt);
            return res;
        } catch (e) {
            //throw new RpcException("Invalid Jwt Token")
            return false;
        }
    }

}