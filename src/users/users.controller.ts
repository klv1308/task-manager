import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @ApiCreatedResponse({ type: UserDto })
  @Get(':id')
  async get(@Param('id') id: number): Promise<UserDto> {
    return await this.userService.get(id);
  }

  @ApiCreatedResponse({ type: UserDto })
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
    return await this.userService.create(createUserDto);
  }

  // @Put(':id')
  // async update(@Param('id') id: string, @Body() createUserDto: CreateUserDto) {
  //   return await this.userService.update(id, createUserDto);
  // }

  // @Delete(':id')
  // async delete(@Param('id') id: string) {
  //   await this.userService.delete(id);
  // }
}
