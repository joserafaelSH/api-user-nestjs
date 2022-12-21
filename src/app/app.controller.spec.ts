import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppRepository } from './app.repository';

import { AppService } from './app.service';
import { appServiceMock } from './app.service.mocks';

describe('AppController', () => {
    let appController: AppController;
    const appService = appServiceMock();

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [AppController],
            providers: [
                { provide: AppService, useValue: AppService },
                { provide: AppRepository, useValue: AppRepository },
            ],
        }).compile();

        appController = app.get<AppController>(AppController);
    });

    it('should be defined', () => {
        expect(appController).toBeDefined();
    });

    describe('getHello', () => {
        beforeEach(() => {
            appController.getHello = jest.fn().mockReturnValue('Hello World!');

            appService.getHello = jest.fn();
        });

        it('should return "Hello World!"', async () => {
            expect(appController.getHello()).toBe('Hello World!');
        });
    });
});
