import { Test, TestingModule } from '@nestjs/testing';
import { User } from '../entities/user.entity';
import { userRepositoryMock } from '../mocks/user.repository.mocks';
import { UserController } from '../user.controller';
import { UserService } from '../user.service';

const userEntityList = [
    new User({
        id: '1',
        name: 'John',
        email: 'teste1@teste.com',
        password: 'jdajdajdjas',
    }),
    new User({
        id: '2',
        name: 'rafa',
        email: 'teste2@teste.com',
        password: 'jdajdajdjas',
    }),
];

describe('UserService', () => {
    let service: UserService;
    const userRepository = userRepositoryMock();

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UserController],
            providers: [{ provide: UserService, useValue: UserService }],
        }).compile();

        service = module.get<UserService>(UserService);
    });

    it('UserService: should be defined', () => {
        expect(service).toBeDefined();
    });
});
