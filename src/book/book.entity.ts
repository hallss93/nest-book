import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  titulo: string;

  @Column()
  ISBN: string;

  @Column()
  autor: string;

  @Column()
  editora: string;

  @Column()
  ano: number;

  @Column()
  idioma: string;

  @Column('double')
  peso: number;

  @Column('double')
  comprimento: number;

  @Column('double')
  largura: number;

  @Column('double')
  altura: number;
}
