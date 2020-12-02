import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Book } from './book.entity';
import { Books } from './book.interface';
import { BooksService } from './books.service';
@Controller('Livros')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Get('/')
  getBooks(
    @Query('Busca') Busca: string,
    @Query('AnoInicial') AnoInicial: string,
    @Query('AnoFinal') AnoFinal: string,
    @Query('Sorting') Sorting: string,
    @Query('MaxResultCount') MaxResultCount: number,
    @Query('SkipCount') SkipCount: string,
  ): Promise<Books> {
    return this.bookService.findAll(
      Busca,
      AnoInicial,
      AnoFinal,
      Sorting,
      MaxResultCount,
      SkipCount,
    );
  }

  @Post('/')
  postBook(
    @Body('titulo') titulo: string,
    @Body('isbn') ISBN: string,
    @Body('autor') autor: string,
    @Body('editora') editora: string,
    @Body('ano') ano: number,
    @Body('idioma') idioma: string,
    @Body('peso') peso: number,
    @Body('comprimento') comprimento: number,
    @Body('largura') largura: number,
    @Body('altura') altura: number,
  ): Promise<Book> {
    return this.bookService.create({
      titulo,
      ISBN,
      autor,
      editora,
      ano,
      idioma,
      peso,
      comprimento,
      altura,
      largura,
    });
  }

  @Get('/:id')
  getBook(@Param('id') id: string): Promise<Book> {
    return this.bookService.findOne(id);
  }

  @Put('/:id')
  putBook(
    @Param('id') id: number,
    @Body('titulo') titulo: string,
    @Body('isbn') ISBN: string,
    @Body('autor') autor: string,
    @Body('editora') editora: string,
    @Body('ano') ano: number,
    @Body('idioma') idioma: string,
    @Body('peso') peso: number,
    @Body('comprimento') comprimento: number,
    @Body('largura') largura: number,
    @Body('altura') altura: number,
  ): Promise<any> {
    return this.bookService.update(id, {
      titulo,
      ISBN,
      autor,
      editora,
      ano,
      idioma,
      peso,
      comprimento,
      altura,
      largura,
    });
  }

  @Delete('/:id')
  geleteBook(@Param('id') id: string): Promise<Book> {
    return this.bookService.remove(id);
  }
}
