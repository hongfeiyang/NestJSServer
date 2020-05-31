import { Injectable, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { Vacancy } from "../models/vacancy.model";
import { VacancyDto } from "../dto/vacancy.dto";

@Injectable()
export class VacancyService {
    constructor(@Inject('VACANCY_CLIENT') private readonly vacancyClient: ClientProxy) {}

    async getAllVacanciesByCustomerId(customerId: string): Promise<Vacancy[]> {
        return this.vacancyClient.send({ role: 'vacancy', cmd: 'getAllByCustomerId' }, customerId).toPromise()
    }

    async getAllVacancies(): Promise<Vacancy[]> {
        return this.vacancyClient.send({ role: 'vacancy', cmd: 'getAll' }, {}).toPromise()
    }

    async getOneVacancy(id: string): Promise<Vacancy> {
        return this.vacancyClient.send({ role: 'vacancy', cmd: 'getOne' }, id).toPromise()
    }

    async findOneAndRemove(id: string): Promise<any> {
        const res = await this.vacancyClient.send({ role: 'vacancy', cmd: 'remove' }, id).toPromise()
        return res ? "success" : "failed"
    }

    async findOneAndUpdate(id: string, update: VacancyDto): Promise<String> {
        const res = await this.vacancyClient.send({ role: 'vacancy', cmd: 'update'}, {"id": id, "update": update}).toPromise()
        return res ? "success" : "failed"
    }

    async createOne(data: VacancyDto) {
        return this.vacancyClient.send({ role: 'vacancy', cmd: 'create' }, data).toPromise()
    }

}