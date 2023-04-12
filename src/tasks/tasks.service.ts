import { Inject, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TASK_REPOSITORY } from 'src/constants';
import { Task } from './entities/task.entity';
import { TaskDto } from './dto/task.dto';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';

@Injectable()
export class TasksService {
  constructor(
    @Inject(TASK_REPOSITORY) private readonly userRepository: typeof Task,
    @InjectMapper() private readonly classMapper: Mapper,
  ) {}

  async create(сreateTaskDto: CreateTaskDto): Promise<TaskDto> {
    // const taskEntity = this.classMapper.map(сreateTaskDto, CreateTaskDto, Task);
    const result = await this.userRepository.create<Task>(сreateTaskDto);
    return this.classMapper.map(result, Task, TaskDto);
  }

  async findAll(): Promise<TaskDto[]> {
    const tasks = await this.userRepository.findAll<Task>();
    return this.classMapper.mapArrayAsync(tasks, Task, TaskDto);
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
