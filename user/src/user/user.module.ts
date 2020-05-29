import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema, User } from "./user.schema";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { ClientProxy, ClientsModule, Transport } from "@nestjs/microservices";

@Module({
    imports: [
        MongooseModule.forFeature([ {name: User.name, schema: UserSchema} ]), // forFeature is used to define which model should be registered in the current scope
        ClientsModule.register([{
            name: 'AUTH_CLIENT',
            transport: Transport.TCP,
            options: {
                host: '0.0.0.0',
                port: 3001
            }
        }])
    ],
    
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}