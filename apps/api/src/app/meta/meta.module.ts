import { MetaService } from './meta.service';
import { MetaController } from './meta.controller';
import { PrismaService } from './../prisma.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [MetaController],
  providers: [MetaService, PrismaService],
})
export class MetaModule {}
