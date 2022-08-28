export default () => ({
  mysql: {
    type: 'mysql',
    host: process.env.MYSQL_DATABASE_HOST,
    port: parseInt(process.env.MYSQL_DATABASE_PORT, 10) || 3306,
    username: process.env.MYSQL_DATABASE_USER,
    password: process.env.MYSQL_DATABASE_PASSWORD,
    database: process.env.MYSQL_DATABASE_BASE,
    autoLoadEntities: true,
    synchronize: true,
    entities: [
      'modules/**/entities/*.entity.ts',
      'dist/modules/**/entities/*.entity{ .ts,.js}',
    ],
    //migrationsRun: false,
    migrations: ['dist/database/migrations/**/*.js'],
    cli: {
      migrationsDir: 'src/database/migrations',
    },
  },
});
