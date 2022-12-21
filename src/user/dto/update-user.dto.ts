import { PartialType } from '@nestjs/swagger';
import {
    IsEmpty,
    IsNotEmpty,
    IsOptional,
    IsString,
    MinLength,
} from 'class-validator';

import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    name: string;

    @IsString()
    @IsNotEmpty()
    @IsEmpty()
    @IsOptional()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @IsOptional()
    password: string;
}
