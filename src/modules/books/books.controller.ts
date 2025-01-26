import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDTO } from './dto/create-book.dto';
import { Book } from './entities/book.entity';
import { UpdateBookDTO } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  createBook(
    @Body() createBookDTO: CreateBookDTO,
  ): Promise<Book | BadRequestException> {
    return this.booksService.createBook(createBookDTO);
  }

  @Patch(':id')
  updateAuthor(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBookDTO: UpdateBookDTO,
  ): Promise<Book | BadRequestException> {
    return this.booksService.updateBook(id, updateBookDTO);
  }

  @Delete(':id')
  deleteBook(@Param('id', ParseIntPipe) id: number): Promise<boolean> {
    return this.booksService.deleteByBookId(id);
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Book | BadRequestException> {
    return this.booksService.findOne(id);
  }

  @Get()
  findAll(): Promise<Book[]> {
    return this.booksService.findAll();
  }
}
