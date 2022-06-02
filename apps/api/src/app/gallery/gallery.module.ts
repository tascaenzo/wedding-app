import { GalleryService } from './gallery.service';
import { Module } from '@nestjs/common';
import { GalleryController } from './gallery.controller';

@Module({
  imports: [],
  controllers: [GalleryController],
  providers: [GalleryService],
})
export class GalleryModule {}
