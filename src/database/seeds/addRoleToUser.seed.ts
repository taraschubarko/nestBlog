import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { User } from '../../modules/user/entities/user.entity';
import { Role } from '../../modules/role/entities/role.entity';

export class AddRoleToUserSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    const repoUser = connection.getRepository(User);
    const users = await repoUser.find();
    const roleUser = await connection.getRepository(Role).findOne({
      where: { id: 2 },
    });
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      user.roles = [roleUser];
      await repoUser.save(user);
    }
  }
}
