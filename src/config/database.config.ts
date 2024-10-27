// src/config/database.config.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: process.env.DATABASE_FILE || 'db.sqlite',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  synchronize: process.env.NODE_ENV === 'development',
  logging: process.env.NODE_ENV === 'development',
};

export default new DataSource({
  ...databaseConfig,
  migrations: ['src/migrations/*{.ts,.js}'],
  entities: ['src/**/*.entity{.ts,.js}'],
} as any);