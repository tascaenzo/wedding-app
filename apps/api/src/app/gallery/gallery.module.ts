import { GalleryService } from './gallery.service';
import { Module } from '@nestjs/common';
import { GalleryController } from './gallery.controller';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [],
  controllers: [GalleryController],
  providers: [GalleryService, PrismaService],
})
export class GalleryModule {}
