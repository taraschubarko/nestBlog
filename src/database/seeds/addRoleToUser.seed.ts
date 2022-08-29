import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { User } from '../../modules/user/entities/user.entity';
import { Role } from '../../modules/role/entities/role.entity';

export class AddRoleToUserSeed implements Seeder {
  public async run(factory: Factory, connection: Connection, ): Promise<void> {
    //const users = await connection.createQueryBuilder(User, 'user').getMany();
    const repoUser = connection.getRepository(User);
    const users = await repoUser.find();
    const roleUser = await connection.getRepository(Role).findOne({
      where: { id: 2 },
    });
    users.forEach((user) => {
      //user.roles = [roleUser];
      user.updated_at = new Date();
      repoUser.save(user);
    });

    console.log(users);
  }
}
