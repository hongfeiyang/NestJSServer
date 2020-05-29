import { Injectable, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { Observable } from "rxjs";

@Injectable()
export class AuthService {
    constructor(@Inject('USER_CLIENT') private readonly client: ClientProxy, private readonly jwtService: JwtService) {}

    // async onApplicationBootstrap() {
    //     await this.client.connect();
    //   }

    async validateUser(username: string, password: string): Promise<any> {
        try {
            const user = await this.client.send({role: 'user', cmd: 'getByUsername'}, username).toPromise();

            console.log(`password: ${user?.password}, stored password: ${password}`)
            if (password === user?.password) {
                return user;
            }

            return null;
            
        } catch (e) {
            console.log(e);
            throw e;
        }
    }


    async login(user) {
        //console.log(user)
        //const payload = {user, sub: user._id};
        return {
            user: user._id,
            accessToken: this.jwtService.sign(user)
        };
    }

    validateToken(jwt: string) {
        return this.jwtService.verify(jwt)
    }
}