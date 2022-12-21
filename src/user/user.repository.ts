import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { SerializedUserDto } from './dto/serialized-user.dto';
import { v4 as uuid } from 'uuid';

// import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserRepository {
    private users: SerializedUserDto[] = [];

    create(user: CreateUserDto) {
        const newUser = new SerializedUserDto();
        newUser.id = uuid().toString();
        newUser.name = user.name;
        newUser.email = user.email;
        newUser.password = user.password;
        this.users.push(newUser);
        return {
            message: 'User created',
            user: { name: newUser.name, email: newUser.email },
        };
    }

    findAll() {
        const showUser = this.users.map((user) => {
            const newShowUser = {
                name: user.name,
                email: user.email,
            };
            return newShowUser;
        });
        return { message: 'All users', users: showUser };
    }

    findOne(id: string) {
        const user = this.users.find((user) => user.id === id);
        if (!user) {
            return {
                message: 'User not found',
                user: { name: '', email: '' },
            };
        }
        return {
            message: 'User found',
            user: { name: user.name, email: user.email },
        };
    }

    // update(id: number, updateUserDto: UpdateUserDto) {
    //     return `This action updates a #${id} user`;
    // }

    // remove(id: number) {
    //     return `This action removes a #${id} user`;
    // }
}
