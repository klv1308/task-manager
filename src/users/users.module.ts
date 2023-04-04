import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TasksModule } from '../tasks/tasks.module';
import { usersProviders } from './users.provider';

@Module({
  controllers: [UsersController],
  providers: [UsersService, ...usersProviders],
})
export class UsersModule {}
