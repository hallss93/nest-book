import { Book } from './book.entity';

export interface Books {
  itens: Book[];
  totalCount?: number;
}
