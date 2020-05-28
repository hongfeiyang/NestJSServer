export declare class UserInput {
    name: string;
    customerId: string;
    role: AllowedUserRole;
    username: string;
    password: string;
}
export declare enum AllowedUserRole {
    user = "user",
    admin = "admin"
}
