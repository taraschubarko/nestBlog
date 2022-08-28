import { Factory, Seeder } from 'typeorm-seeding';
import { User } from '../../modules/user/entities/user.entity';

export class CreateUsers implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(User)().createMany(10);
  }
}
