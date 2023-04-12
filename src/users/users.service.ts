import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { USER_REPOSITORY } from 'src/constants';
import { User } from './entities/user.entity';
import { UserDto } from './dto/user.dto';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
    @InjectMapper() private readonly classMapper: Mapper,
  ) {}

  async get(id: number): Promise<UserDto> {
    const result = await this.userRepository.findOne<User>({ where: { id } });
    return await this.classMapper.mapAsync(result, User, UserDto);
  }

  async create(user: CreateUserDto): Promise<UserDto> {
    const result = await this.userRepository.create<User>(user);
    return await this.classMapper.mapAsync(result, User, UserDto);
  }

  // async update(user: CreateUserDto): Promise<User> {
  //   return await this.userRepository.update<User>(user);
  // }

  // async create(user: CreateUserDto): Promise<User> {
  //   return await this.userRepository.create<User>(user);
  // }
}
