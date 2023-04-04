import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { USER_REPOSITORY } from 'src/constants';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
  ) {}

  async get(id: number): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { id } });
  }

  async create(user: CreateUserDto): Promise<User> {
    return await this.userRepository.create<User>(user);
  }

  // async update(user: CreateUserDto): Promise<User> {
  //   return await this.userRepository.update<User>(user);
  // }

  // async create(user: CreateUserDto): Promise<User> {
  //   return await this.userRepository.create<User>(user);
  // }
}
