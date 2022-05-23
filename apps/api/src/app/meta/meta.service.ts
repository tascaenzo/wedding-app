import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class MetaService {
  constructor(private readonly prismaService: PrismaService) {}

  async update(key: string, value: boolean) {
    await this.prismaService.meta.update({
      where: { key },
      data: { value: value === true ? 'true' : 'false' },
    });

    return this.findOne(key);
  }

  findOne(key: string) {
    return this.prismaService.meta.findUnique({ where: { key } });
  }
}
