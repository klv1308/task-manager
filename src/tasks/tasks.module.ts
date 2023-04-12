import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { tasksProviders } from './tasks.provider';
import { TaskProfile } from './mapping/task.profile';

@Module({
  controllers: [TasksController],
  providers: [TasksService, TaskProfile, ...tasksProviders],
})
export class TasksModule {}
