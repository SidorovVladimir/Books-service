import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from './entities/author.entity';
import { Repository } from 'typeorm';
import { CreateAuthorDTO } from './dto/create-author.dto';
import { AppError } from 'src/common/constant/errors';
import { UpdateAuthorDTO } from './dto/update-author.dto';
import { BooksService } from '../books/books.service';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author)
    private readonly authorsRepository: Repository<Author>,
    private readonly booksService: BooksService,
  ) {}

  async createAuthor(
    dto: CreateAuthorDTO,
  ): Promise<Author | BadRequestException> {
    try {
      const existAuthor = await this.authorsRepository.exists({
        where: {
          firstName: dto.firstName,
          lastName: dto.lastName,
        },
      });
      if (existAuthor) return new BadRequestException(AppError.AUTHOR_EXIST);
      const author = new Author();
      author.firstName = dto.firstName;
      author.lastName = dto.lastName;
      await this.authorsRepository.save(author);
      return author;
    } catch (e) {
      throw new Error(e);
    }
  }

  async updateAuthor(
    authorId: number,
    dto: UpdateAuthorDTO,
  ): Promise<Author | BadRequestException> {
    try {
      const currentAuthor = await this.authorsRepository.findOneBy({
        author_id: authorId,
      });
      if (!currentAuthor)
        return new BadRequestException(AppError.AUTHOR_NOT_EXIST);
      const updateAuthor = await this.authorsRepository.merge(
        currentAuthor,
        dto,
      );
      await this.authorsRepository.save(updateAuthor);
      return updateAuthor;
    } catch (e) {
      throw new Error(e);
    }
  }

  async deleteAuthor(authorId: number): Promise<boolean> {
    try {
      await this.booksService.deleteByAuthorId(authorId);
      await this.authorsRepository.delete({ author_id: authorId });
      return true;
    } catch (e) {
      throw new Error(e);
    }
  }

  async findOne(authorId: number): Promise<Author | BadRequestException> {
    try {
      const author = await this.authorsRepository.findOneBy({
        author_id: authorId,
      });
      if (!author) return new BadRequestException(AppError.AUTHOR_NOT_EXIST);
      return author;
    } catch (e) {
      throw new Error(e);
    }
  }
  async findAll(): Promise<Author[]> {
    return this.authorsRepository.find({
      relations: {
        books: true,
      },
    });
  }
}
