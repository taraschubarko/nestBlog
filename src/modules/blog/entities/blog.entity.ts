import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';

export enum StatusEnum {
  PUBLISHED = 'published',
  CREATED = 'created',
  MODERATED = 'moderated',
  BLOCKED = 'blocked',
}

@Entity('blogs')
export class Blog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  short_text: string;

  @Column()
  long_text: string;

  @Column()
  image: string;

  @Column({
    type: 'enum',
    enum: StatusEnum,
    default: StatusEnum.CREATED,
  })
  status: StatusEnum;

  @Column()
  user_id: number;

  @Column()
  slug: string;

  @UpdateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;

  @OneToOne(() => User, (user) => user.posts)
  user: User;
}
