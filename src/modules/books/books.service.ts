import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';
import { CreateBookDTO } from './dto/create-book.dto';
import { AppError } from 'src/common/constant/errors';
import { UpdateBookDTO } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private readonly booksRepository: Repository<Book>,
  ) {}

  async createBook(dto: CreateBookDTO): Promise<Book | BadRequestException> {
    try {
      const existBook = await this.booksRepository.exists({
        where: {
          author_id: dto.author_id,
          title: dto.title,
        },
      });
      if (existBook) return new BadRequestException(AppError.BOOK_EXIST);
      const book = new Book();
      book.author_id = dto.author_id;
      book.title = dto.title;
      await this.booksRepository.save(book);
      return book;
    } catch (e) {
      throw new Error(e);
    }
  }

  async updateBook(
    bookId: number,
    dto: UpdateBookDTO,
  ): Promise<Book | BadRequestException> {
    try {
      const currentBook = await this.booksRepository.findOneBy({
        book_id: bookId,
      });
      if (!currentBook) return new BadRequestException(AppError.BOOK_NOT_EXIST);
      const updateBook = await this.booksRepository.merge(currentBook, dto);
      await this.booksRepository.save(updateBook);
      return updateBook;
    } catch (e) {
      throw new Error(e);
    }
  }

  async deleteByBookId(bookId: number): Promise<boolean> {
    try {
      await this.booksRepository.delete({ book_id: bookId });
      return true;
    } catch (e) {
      throw new Error(e);
    }
  }

  async deleteByAuthorId(authorId: number): Promise<boolean> {
    try {
      await this.booksRepository.delete({ author_id: authorId });
      return true;
    } catch (e) {
      throw new Error(e);
    }
  }

  async findOne(bookId: number): Promise<Book | BadRequestException> {
    try {
      const book = await this.booksRepository.findOneBy({
        book_id: bookId,
      });
      if (!book) return new BadRequestException(AppError.BOOK_NOT_EXIST);
      return book;
    } catch (e) {
      throw new Error(e);
    }
  }
  async findAll(): Promise<Book[]> {
    return this.booksRepository.find({
      relations: {
        author: true,
      },
    });
  }
}
