import { Mapper, createMap } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { TaskDto } from '../dto/task.dto';
import { Task } from '../entities/task.entity';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';

@Injectable()
export class TaskProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, Task, TaskDto);
      createMap(
        mapper,
        CreateTaskDto,
        Task,
        //forMember((dest) => dest.id, ignore()),
      );
      createMap(mapper, UpdateTaskDto, Task);
    };
  }
}
