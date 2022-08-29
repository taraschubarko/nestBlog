import { ConfigService } from '@nestjs/config';
import { ValueTransformer } from 'typeorm';
import * as bcrypt from 'bcrypt';

export class PasswordTransformer implements ValueTransformer {
  constructor(private config: ConfigService) {}

  from(value: string): string {
    return value;
  }

  to(value: string): string {
    const saltOrRounds = parseInt(this.config.get('SALT'));
    return bcrypt.hashSync(value, saltOrRounds);
  }
}
