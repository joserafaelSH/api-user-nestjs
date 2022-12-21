import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';
import { appServiceMock } from '../mocks/app.service.mocks';

describe('AppController', () => {
    let appController: AppController;
    const appService = appServiceMock();

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [AppController],
            providers: [{ provide: AppService, useValue: AppService }],
        }).compile();

        appController = app.get<AppController>(AppController);
    });

    it('AppController: should be defined', () => {
        expect(appController).toBeDefined();
    });

    describe('AppController: getHello', () => {
        beforeEach(() => {
            appController.getHello = jest.fn().mockReturnValue('Hello World!');

            appService.getHello = jest.fn();
        });

        it('AppController: should return "Hello World!"', async () => {
            expect(appController.getHello()).toBe('Hello World!');
        });
    });
});
