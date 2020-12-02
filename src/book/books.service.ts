import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  LessThan,
  LessThanOrEqual,
  Like,
  MoreThan,
  MoreThanOrEqual,
  Repository,
} from 'typeorm';
import { Book } from './book.entity';
import { Books } from './book.interface';
@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  async findAll(
    Busca: string,
    AnoInicial: string,
    AnoFinal = null,
    Sorting: string,
    MaxResultCount: number,
    SkipCount: string,
  ): Promise<Books> {
    console.log(Busca);
    let where = [];
    let order = {};
    if (Busca) {
      where.push(
        {
          titulo: Like(`%${Busca}%`),
          autor: Like(`%${Busca}%`),
          ISBN: Like(`%${Busca}%`),
        },
        { ano: MoreThanOrEqual(AnoInicial || 0) },
        { ano: LessThanOrEqual(AnoFinal || 0) },
      );
    }
    if (Sorting) {
      order = {
        [Sorting]: 'ASC',
      };
    }
    console.log(order);
    const books = await this.booksRepository.findAndCount({
      where: [...where],
      order,
      take: MaxResultCount,
    });

    return SkipCount
      ? { itens: books[0] }
      : {
          itens: books[0],
          totalCount: books[1],
        };
  }

  findOne(id: string): Promise<Book> {
    return this.booksRepository.findOne(id);
  }

  async remove(id: string): Promise<any> {
    return await this.booksRepository.delete(id);
  }

  async create(body: Book): Promise<Book> {
    return await this.booksRepository.save(body);
  }

  async update(id: number, body: Book): Promise<any> {
    return await await this.booksRepository.update({ id }, body);
  }
}
