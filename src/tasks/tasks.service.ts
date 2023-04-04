import { Inject, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TASK_REPOSITORY } from 'src/constants';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @Inject(TASK_REPOSITORY) private readonly userRepository: typeof Task,
  ) {}

  async create(user: CreateTaskDto): Promise<Task> {
    return await this.userRepository.create<Task>(user);
  }

  async findAll(): Promise<Task[]> {
    return await this.userRepository.findAll<Task>();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} task`;
  // }

  // update(id: number, updateTaskDto: UpdateTaskDto) {
  //   return `This action updates a #${id} task`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} task`;
  // }
}