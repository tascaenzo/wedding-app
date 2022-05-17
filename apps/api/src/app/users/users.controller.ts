import { UsersService } from './users.service';
import { Body, Controller, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async Login(@Body() user: Prisma.UserCreateInput) {
    console.log(user)
    return this.usersService.createUser(user);
  }
}
