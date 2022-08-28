import {
  Injectable,
  Logger,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserInterface } from './interface/user.interface';
import { User } from './entities/user.entity';

@Injectable()
export class UserService implements UserInterface {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  create({ name: name }: { name: any }) {
    const user = new User();
    user.name = name;
    return this.usersRepository.save(user);
  }
}
