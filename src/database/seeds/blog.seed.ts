import { Factory, Seeder } from 'typeorm-seeding';
import { Blog } from '../../modules/blog/entities/blog.entity';

export class CreateBlog implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Blog)().createMany(100);
  }
}
