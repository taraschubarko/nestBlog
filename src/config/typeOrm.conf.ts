import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

import { createUsersTable1661503837395 } from '../database/migrations/1661503837395-create_users_table';
import { CreateRolesTable1661514510395 } from '../database/migrations/1661514510395-CreateRolesTable';
import { User } from '../modules/user/entities/user.entity';
import { Role } from '../modules/role/entities/role.entity';
import { Blog } from '../modules/blog/entities/blog.entity';
import { CreateBlogsTable1661840986569 } from '../database/migrations/1661840986569-CreateBlogsTable';

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'mysql',
  host: configService.get('MYSQL_DATABASE_HOST'),
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'test_nuxt',
  entities: [User, Role, Blog],
  migrations: [
    createUsersTable1661503837395,
    CreateRolesTable1661514510395,
    CreateBlogsTable1661840986569,
  ],
});
