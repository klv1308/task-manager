import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';

export class TaskDto {
  @ApiProperty()
  @AutoMap()
  id: number;

  @ApiProperty()
  @AutoMap()
  title: string;

  @ApiProperty()
  @AutoMap()
  description?: string;

  @ApiProperty()
  @AutoMap()
  estimation?: string;
}
