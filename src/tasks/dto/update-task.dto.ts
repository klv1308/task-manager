import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { ApiProperty } from '@nestjs/swagger';
import { AutoMap } from '@automapper/classes';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @ApiProperty()
  @AutoMap()
  id: number;
}
