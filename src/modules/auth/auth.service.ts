import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    // if (user && user.password === pass) {
    //   const { password, ...result } = user;
    //   return result;
    // }
    //return null;
    return user;
  }

  async login(user: any) {
    //const payload = { email: user.email, sub: user.userId };
    console.log(user);
    return {
      //access_token: this.jwtService.sign(payload),
      access_token: this.jwtService.sign(user),
    };
  }
}
