import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TablesService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    return this.prismaService.table.findMany({
      include: { Invited: true },
    });
  }
}
