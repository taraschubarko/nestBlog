import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  DefaultValuePipe,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Get()
  getUser(): Promise<User> {
    return this.usersService.create({ name: 'tarik1' });
  }
}
