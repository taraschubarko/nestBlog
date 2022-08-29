import { define } from 'typeorm-seeding';
import { Role } from '../../modules/role/entities/role.entity';

define(Role, () => {
  const entity = new Role();
  return entity;
});
