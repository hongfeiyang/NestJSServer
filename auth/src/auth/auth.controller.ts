import { AuthService } from "./auth.service";
import { UseGuards, Post, Request, Controller, Get, Body, Req, UnauthorizedException, HttpException, HttpStatus } from "@nestjs/common";
import { LocalAuthGuard } from "./local-auth.guards";
import { MessagePattern } from "@nestjs/microservices";

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
        if (!data) {throw new HttpException("please provide user credential", HttpStatus.FORBIDDEN)}
        const user = await this.authService.validateUser(data.username, data.password)
        if (!user) {throw new HttpException("user not found", HttpStatus.FORBIDDEN)}
        console.log(user)
        return this.authService.login(user)
    }

    @MessagePattern({role: 'auth', cmd: 'check'})
    async isLoggedIn(data) {
        try {
            const res = this.authService.validateToken(data.jwt);
            return res;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

}