import { User } from './src/modules/user/entities/user.entity';
import { Role } from './src/modules/role/entities/role.entity';

export default {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'test_nuxt',
  entities: [User, Role],
  //seeds: ['src/database/seeds/**/*{.ts,.js}'],
  seeds: [
    //'src/database/seeds/user.seed.ts',
    //'src/database/seeds/role.seed.ts',
    'src/database/seeds/addRoleToUser.seed.ts',
  ],
  factories: ['src/database/factories/**/*{.ts,.js}'],
};
