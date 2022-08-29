import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'User is not register',
        },
        HttpStatus.NOT_FOUND,
      );
    }
    const compare = bcrypt.compareSync(password, user.password);
    if (!compare) {
      throw new UnauthorizedException();
    }
    return user;
  }

  async login(user: any) {
    const userData = await this.validateUser(user.email, user.password);
    const payload = { id: userData.id, email: userData.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
