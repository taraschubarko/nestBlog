import {
  Injectable,
  Logger,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserInterface } from './interface/user.interface';
import { User } from './entities/user.entity';
import { RoleService } from '../role/role.service';

@Injectable()
export class UserService implements UserInterface {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly roleService: RoleService,
  ) {}

  create({ name: name }: { name: any }) {
    const user = new User();
    user.name = name;
    return this.usersRepository.save(user);
  }

  async findAll(): Promise<object> {
    const users = this.usersRepository.find();
    const user = await this.usersRepository.findOne({ where: { id: 1 } });
    // const role = await this.roleService.findOne(1);
    // const role2 = await this.roleService.findOne(2);
    // user.name = 'tarik';
    // user.roles = [role, role2];
    //
    // await this.usersRepository.save(user);
    return users;
  }
}
