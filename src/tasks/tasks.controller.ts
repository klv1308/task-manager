import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { TaskDto } from './dto/task.dto';

@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @ApiCreatedResponse({ type: TaskDto })
  @Post()
  async create(@Body() createTaskDto: CreateTaskDto): Promise<TaskDto> {
    return await this.tasksService.create(createTaskDto);
  }

  @ApiCreatedResponse({ type: TaskDto, isArray: true })
  @Get()
  async findAll(): Promise<TaskDto[]> {
    return await this.tasksService.findAll();
  }

  // @Get('forbidden')
  // forbidden() {
  //   throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.tasksService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
  //   return this.tasksService.update(+id, updateTaskDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.tasksService.remove(+id);
  // }
}
