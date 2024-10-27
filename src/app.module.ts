// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './modules/products/products.module';

@Module({
  imports: [
    // Configuração global do ambiente
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // Configuração do TypeORM para SQLite
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      autoLoadEntities: true, // Carrega automaticamente as entidades
      synchronize: true, // Apenas para desenvolvimento!
    }),

    // Módulos da aplicação
    ProductsModule,
  ],
})
export class AppModule {}