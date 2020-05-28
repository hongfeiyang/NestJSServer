import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { JwtModule } from "@nestjs/jwt";
import { LocalStrategy } from "./local.strategy";
import { JwtStrategy } from "./jwt.strategy";
import { AuthController } from "./auth.controller";
import { jwtContants } from "./jwt.constants";

@Module({
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    imports: [
        ClientsModule.register([{
            name: 'USER_CLIENT',
            transport: Transport.TCP,
            options: {
                host: 'localhost',
                port: 3000, // client registered port must match microservice port, which is set in app.connectMicroservice
            }
        }]),
        JwtModule.register({ // use strategy
            secret: jwtContants.secret,
            signOptions: {expiresIn: '3600s'} // auto invalidate in 1 h 
        })],
})
export class AuthModule {}