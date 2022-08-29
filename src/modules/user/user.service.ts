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
    return this.usersRepository.find({
      select: ['id', 'name', 'email', 'created_at'],
      //relations: ['roles'],
    });
  }

  findByEmail(email: string) {
    return this.usersRepository.findOneBy({ email: email });
  }
}
