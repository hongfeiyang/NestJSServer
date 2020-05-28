export declare class LoginInput {
    username: string;
    password: string;
}
export declare class AccessToken {
    user: string;
    accessToken: string;
}
export declare class Company {
    _id: string;
    name: string;
    address?: string;
}
export declare abstract class IQuery {
    abstract getVacancy(id: string): Vacancy | Promise<Vacancy>;
    abstract getCompany(id: string): Company | Promise<Company>;
    abstract login(credentials: LoginInput): AccessToken | Promise<AccessToken>;
}
export declare class Vacancy {
    _id: string;
    title: string;
    description?: string;
    expiredAt?: DateTime;
    company_id?: string;
    company?: Company;
}
export declare type DateTime = any;
