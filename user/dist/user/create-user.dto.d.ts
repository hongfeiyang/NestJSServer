export declare class CreateUserDto {
    name: string;
    username: string;
    password: string;
    customerId: string;
    role: {
        type: string;
        enum: ['user', 'admin'];
        default: ['user'];
        required: true;
    };
}
