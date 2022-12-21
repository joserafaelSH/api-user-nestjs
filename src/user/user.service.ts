import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { SerializedUserDto } from './dto/serialized-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}
    create(user: CreateUserDto) {
        return this.userRepository.create(user);
    }

    findAll() {
        return this.userRepository.findAll();
    }

    findOne(id: string) {
        return this.userRepository.findOne(id);
    }

    // update(id: number, updateUserDto: UpdateUserDto) {
    //     return `This action updates a #${id} user`;
    // }

    // remove(id: number) {
    //     return `This action removes a #${id} user`;
    // }
}
