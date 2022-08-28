import { faker } from '@faker-js/faker';
import { define } from 'typeorm-seeding';
import { User } from '../../modules/user/entities/user.entity';

define(User, () => {
  const user = new User();

  user.name = faker.name.firstName();
  user.email = faker.internet.email();
  user.password = '12345678';

  return user;
});
