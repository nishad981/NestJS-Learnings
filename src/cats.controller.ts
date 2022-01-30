import { Controller, Get, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Post()
  create(): string {
    return 'This action adds new cats';
  }

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
