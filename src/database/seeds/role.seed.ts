import { Factory, Seeder } from 'typeorm-seeding';
import { Role } from '../../modules/role/entities/role.entity';

export class CreateRoles implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Role)().create({
      name: 'Admin',
      slug: 'admin',
    });
    await factory(Role)().create({
      name: 'User',
      slug: 'user',
    });
    await factory(Role)().create({
      name: 'Moderator',
      slug: 'moderator',
    });
  }
}
