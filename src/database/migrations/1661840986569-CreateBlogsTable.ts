import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableIndex,
} from 'typeorm';

export class CreateBlogsTable1661840986569 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'blogs',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            unsigned: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'short_text',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'long_text',
            type: 'longtext',
            isNullable: true,
          },
          {
            name: 'image',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'status',
            type: 'enum',
            enum: ['published', 'created', 'moderated', 'blocked'],
            isNullable: true,
          },
          {
            name: 'user_id',
            type: 'int',
          },
          {
            name: 'slug',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createIndex(
      'blogs',
      new TableIndex({
        name: 'IDX_QUESTION_NAME',
        columnNames: ['name'],
      }),
    );

    await queryRunner.createForeignKey(
      'blogs',
      new TableForeignKey({
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('blogs');
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('user_id') !== -1,
    );
    await queryRunner.dropForeignKey('blogs', foreignKey);
    await queryRunner.dropIndex('blogs', 'IDX_QUESTION_NAME');
    await queryRunner.dropTable('blogs');
  }
}
