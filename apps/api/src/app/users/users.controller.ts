import { UsersService } from './users.service';
import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async Login(@Body() user: Prisma.UserCreateInput) {
    return this.usersService.createUser(user);
  }

  @Get(':id')
  async get(@Param('id') userId: string) {
    return this.usersService.findOne(userId);
  }
}
