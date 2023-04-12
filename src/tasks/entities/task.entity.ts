import { AutoMap } from '@automapper/classes';
import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { User } from 'src/users/entities/user.entity';

@Table
export class Task extends Model<Task> {
  @AutoMap()
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  })
  id: number;

  @AutoMap()
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @AutoMap()
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  description: string;

  @AutoMap()
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  estimation: string;

  @AutoMap()
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
