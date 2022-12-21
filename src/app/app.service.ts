import { Injectable } from '@nestjs/common';
import { AppRepository } from './app.repository';

@Injectable()
export class AppService {
    constructor(private readonly appRepository: AppRepository) {}
    getHello(): string {
        return this.appRepository.getHello();
    }
}
