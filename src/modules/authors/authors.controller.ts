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
import { AuthorsService } from './authors.service';
import { CreateAuthorDTO } from './dto/create-author.dto';
import { Author } from './entities/author.entity';
import { UpdateAuthorDTO } from './dto/update-author.dto';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Post()
  createAuthor(
    @Body() createAuthorDTO: CreateAuthorDTO,
  ): Promise<Author | BadRequestException> {
    return this.authorsService.createAuthor(createAuthorDTO);
  }

  @Patch(':id')
  updateAuthor(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAuthorDTO: UpdateAuthorDTO,
  ): Promise<Author | BadRequestException> {
    return this.authorsService.updateAuthor(id, updateAuthorDTO);
  }

  @Delete(':id')
  deleteAuthor(@Param('id', ParseIntPipe) id: number): Promise<boolean> {
    return this.authorsService.deleteAuthor(id);
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Author | BadRequestException> {
    return this.authorsService.findOne(id);
  }
  @Get()
  findAll(): Promise<Author[]> {
    return this.authorsService.findAll();
  }
}
