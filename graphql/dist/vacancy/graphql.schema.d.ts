export declare abstract class CreateVacancyInput {
    name?: string;
    age?: number;
}
export declare abstract class Vacancy {
    id?: number;
    name?: string;
    age?: number;
}
export declare abstract class IMutation {
    abstract createCat(createCatInput?: CreateVacancyInput): Vacancy | Promise<Vacancy>;
}
export declare abstract class IQuery {
    abstract getCats(): Vacancy[] | Promise<Vacancy[]>;
    abstract cat(id: string): Vacancy | Promise<Vacancy>;
    abstract temp__(): boolean | Promise<boolean>;
}
export declare abstract class ISubscription {
    abstract catCreated(): Vacancy | Promise<Vacancy>;
}
