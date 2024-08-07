import { Module } from '@nestjs/common';
import { BooksController } from './books/books.controller';
import { BookManipulateService } from './book-manipulate/book-manipulate.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', 
      password: '',
      database: 'first_nest_app',
      entities: [],
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    AuthModule
  ],
  controllers: [BooksController],
  providers: [BookManipulateService],
})
export class AppModule {}
