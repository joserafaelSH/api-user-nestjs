import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';
import { appRepositoryMock } from '../mocks/app.repository.mocks';

describe('AppService', () => {
    let appService: AppService;
    const appRepository = appRepositoryMock();

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [AppController],
            providers: [{ provide: AppService, useValue: AppService }],
        }).compile();

        appService = app.get<AppService>(AppService);
    });

    it('AppService: should be defined', () => {
        expect(appService).toBeDefined();
    });

    describe('AppService: getHello', () => {
        beforeEach(() => {
            appService.getHello = jest.fn().mockReturnValue('Hello World!');

            appRepository.getHello = jest.fn();
        });

        it('AppService: should return "Hello World!"', async () => {
            expect(appService.getHello()).toBe('Hello World!');
        });
    });
});
