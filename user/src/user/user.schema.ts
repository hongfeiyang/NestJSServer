import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema()
export class User extends Document {

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    username: string;

    @Prop({ required: true })
    password: string;

    @Prop({
        enum: ['user', 'admin'],
        required: [true, "must have a role"]
    })
    role: string;

    @Prop({ required: true })
    customerId: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
