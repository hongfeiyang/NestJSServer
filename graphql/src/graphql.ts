
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class LoginInput {
    username: string;
    password: string;
}

export class AccessToken {
    user: string;
    accessToken: string;
}

export class Company {
    _id: string;
    name: string;
    address?: string;
}

export abstract class IQuery {
    abstract getVacancy(id: string): Vacancy | Promise<Vacancy>;

    abstract getCompany(id: string): Company | Promise<Company>;

    abstract login(credentials: LoginInput): AccessToken | Promise<AccessToken>;
}

export class Vacancy {
    _id: string;
    title: string;
    description?: string;
    expiredAt?: DateTime;
    company_id?: string;
    company?: Company;
}

export type DateTime = any;
