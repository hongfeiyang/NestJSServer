import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
//mongodb+srv://mark:mark@cluster0-w127a.mongodb.net/test?retryWrites=true&w=majority/nest
@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost/user-service"),
    UserModule,
  ],
})
export class AppModule {}
