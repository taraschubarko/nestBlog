import { faker } from '@faker-js/faker';
import { define } from 'typeorm-seeding';
import { Blog } from '../../modules/blog/entities/blog.entity';

define(Blog, () => {
  const entity = new Blog();
  entity.name = faker.lorem.sentence(4);
  entity.short_text = faker.lorem.paragraph(1);
  entity.long_text = faker.lorem.text();
  entity.image = faker.image.imageUrl();
  entity.user_id = faker.helpers.arrayElement([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15,
  ]);
  entity.slug = faker.lorem.slug(5);
  entity.created_at = new Date();
  entity.updated_at = new Date();

  return entity;
});
