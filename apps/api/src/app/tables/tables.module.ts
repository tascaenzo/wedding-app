import { TablesController } from './tables.controller';
import { PrismaService } from '../prisma.service';
import { Module } from '@nestjs/common';
import { TablesService } from './tables.service';

@Module({
  imports: [],
  controllers: [TablesController],
  providers: [TablesService, PrismaService],
})
export class TablesModule {}
