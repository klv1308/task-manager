import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/users/entities/user.entity';
import { Task } from 'src/tasks/entities/task.entity';
import { SEQUELIZE } from 'src/constants';
import { ConfigService } from '@nestjs/config';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async (configService: ConfigService) => {
      const config = configService.get('databaseConfig');
      console.log(config);

      //console.log(process.env.NODE_ENV);
      // switch (process.env.NODE_ENV) {
      //   case 'development':
      //     config = configService.get('databaseConfig');
      //     break;
      //   case 'test':
      //     //config = databaseConfig.test;
      //     break;
      //   case 'production':
      //     //config = databaseConfig.production;
      //     break;
      //   default:
      //     config = configService.get('databaseConfig');
      // }

      const sequelize = new Sequelize(config);
      sequelize.addModels([User, Task]);
      await sequelize.sync();
      return sequelize;
    },
    inject: [ConfigService],
  },
];
