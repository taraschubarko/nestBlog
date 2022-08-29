import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateRolesTable1661514510395 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'roles',
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
            isUnique: true,
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
    await queryRunner.createTable(
      new Table({
        name: 'role_user',
        columns: [
          {
            name: 'user_id',
            type: 'int',
            unsigned: true,
            isPrimary: true,
          },
          {
            name: 'role_id',
            type: 'int',
            unsigned: true,
            isPrimary: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('roles');
    await queryRunner.dropIndex('roles', 'UQ_648e3f5447f725579d7d4ffdfb7');
    await queryRunner.dropIndex('roles', 'UQ_881f72bac969d9a00a1a29e1079');
  }
}
