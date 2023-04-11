import { ApiProperty } from '@nestjs/swagger';

export class TaskDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description?: string;

  @ApiProperty()
  estimation?: string;
}
