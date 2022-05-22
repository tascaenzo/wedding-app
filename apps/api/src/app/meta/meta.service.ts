import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class MetaService {
  constructor(private readonly prismaService: PrismaService) {}

  update(key: string, value: boolean) {
    return this.prismaService.meta.update({
      where: { key },
      data: { value: value.toString() },
    });
  }

  findOne(key: string) {
    return this.prismaService.meta.findUnique({ where: { key } });
  }
}
