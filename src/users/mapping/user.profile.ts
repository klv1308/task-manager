import { Mapper, createMap } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { UserDto } from '../dto/user.dto';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UserProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, User, UserDto);
      createMap(
        mapper,
        CreateUserDto,
        User,
        //forMember((dest) => dest.id, ignore()),
      );
      //createMap(mapper, UpdateUserDto, User);
    };
  }
}
