import { Module } from '@nestjs/common';
import { BooksModule } from './books.module';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';

@Module({
  imports: [BooksModule],
  providers: [BooksService],
  controllers: [BooksController]
})
export class UserHttpModule {}
