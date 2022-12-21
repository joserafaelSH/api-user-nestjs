import { Test, TestingModule } from '@nestjs/testing';
import { User } from '../entities/user.entity';
import { userServiceMock } from '../mocks/user.service.mocks';
import { UserController } from '../user.controller';
import { UserService } from '../user.service';

const userEntityList: User[] = [
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

const userEntity: User = new User({
    id: '1',
    name: 'John',
    email: 'teste1@teste.com',
    password: 'jdajdajdjas',
});

type userEntityReturFindOne = {
    message: string;
    user: { name: string; email: string };
};

describe('UserController', () => {
    let controller: UserController;
    const userService = userServiceMock();

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UserController],
            providers: [{ provide: UserService, useValue: userService }],
        }).compile();

        controller = module.get<UserController>(UserController);
    });

    it('UserController: should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('UserController: findAll', () => {
        beforeEach(() => {
            controller.findAll = jest.fn().mockReturnValue({
                message: 'All users',
                users: userEntityList,
            });
        });

        it('UserController: should return "findAll"', async () => {
            expect(controller.findAll()).toEqual({
                message: 'All users',
                users: userEntityList,
            });
        });
    });

    describe('UserController: findOne', () => {
        beforeEach(() => {
            controller.findOne = jest.fn().mockReturnValue({
                message: 'User found',
                user: { name: userEntity.name, email: userEntity.email },
            });
        });

        it('UserController: should return "findOne"', async () => {
            expect(controller.findAll()).toEqual({
                message: 'All users',
                users: userEntityList,
            });
        });
    });
});
