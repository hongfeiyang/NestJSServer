import { Document } from 'mongoose';
export declare class User extends Document {
    name: string;
    username: string;
    password: string;
    role: string;
    customerId: string;
}
export declare const UserSchema: any;
