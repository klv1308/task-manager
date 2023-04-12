import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { usersProviders } from './users.provider';
import { UserProfile } from './mapping/user.profile';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UserProfile, ...usersProviders],
})
export class UsersModule {}
