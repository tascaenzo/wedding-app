import { PrismaService } from './../prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(user: Prisma.UserCreateInput) {
    const findUser = await this.prismaService.user.findFirst({
      where: {
        firstName: user.firstName,
        lastName: user.lastName,
      },
    });

    if (findUser) findUser;

    return this.prismaService.user.create({ data: user });
  }

  async findOne(userId: string) {
    return this.prismaService.user.findUnique({ where: { id: userId } });
  }
}
