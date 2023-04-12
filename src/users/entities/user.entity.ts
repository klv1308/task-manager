import { AutoMap } from '@automapper/classes';
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
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
  firstName: string;
  @AutoMap()
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lastName: string;
  @AutoMap()
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;
  @AutoMap()
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  birthday: Date;
  @AutoMap()
  @Column({
    type: DataType.ENUM,
    values: ['male', 'female'],
    allowNull: false,
  })
  gender: string;
}
