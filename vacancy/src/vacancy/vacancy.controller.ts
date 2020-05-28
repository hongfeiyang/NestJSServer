import { Controller, HttpException, HttpStatus } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { createVacancyDto } from './create-vacancy.dto';
import { VacancyService } from './vacancy.service';

@Controller('/vacancy')
export class VacancyController {

    constructor(private readonly vacancyService: VacancyService) {}

    @MessagePattern({
        role: 'vacancy',
        cmd: 'getAll'
    })
    getVacancies() {
        return this.vacancyService.findAll();
    }

    @MessagePattern({
        role: 'vacancy',
        cmd: 'getAllByCustomerId'
    })
    getVacanciesByCutomerId(customerId: string) {
        if (!customerId) {throw new HttpException("customerId must not be null", HttpStatus.BAD_REQUEST)}
        return this.vacancyService.findAllByCustomerId(customerId);
    }

    @MessagePattern({
        role: 'vacancy',
        cmd: 'getOne'
    })
    getOneVacancy(id: string) {
        if (!id) {throw new HttpException("id must not be null", HttpStatus.BAD_REQUEST)}
        return this.vacancyService.findOne(id);
    }

    @MessagePattern({
        role: 'vacancy',
        cmd: 'create'
    })
    createVacancy(data: createVacancyDto) {
        if (!data) {throw new HttpException("no data received", HttpStatus.BAD_REQUEST)}
        return this.vacancyService.create(data)
    }

    @MessagePattern({
        role: 'vacancy',
        cmd: 'update'
    })
    updateVacancy(data: {id: string, update: createVacancyDto}) {
        if (!data || !data.update || !data.id) {throw new HttpException("id and update must not be null", HttpStatus.BAD_REQUEST)}
        return this.vacancyService.findOneAndUpdate(data.id, data.update)
    }

    @MessagePattern({
        role: 'vacancy',
        cmd: 'remove'
    })
    removeVacancy(id: string) {
        if (!id) {throw new HttpException("id must not be null", HttpStatus.BAD_REQUEST)}
        return this.vacancyService.findOneAndDelete(id)
    }

}
