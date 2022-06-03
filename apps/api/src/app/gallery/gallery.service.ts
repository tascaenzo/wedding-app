import { Injectable } from '@nestjs/common';
import fs = require('fs');
import { nanoid } from 'nanoid';
import { PrismaService } from '../prisma.service';

@Injectable()
export class GalleryService {
  constructor(private readonly prismaService: PrismaService) {}
  
  async toFile(file, name: string) {
    const fileName = `${nanoid()}_${name}`;
    try {
      fs.writeFileSync(`${process.env.NX_UPLOAD_FILE}/${fileName}`, file);
      await this.prismaService.media.create({data: {
        url: `${process.env.NX_API_HOST}/static/${fileName}`
      }})
      return fileName;
    } catch (err) {
      console.error(err);
    }
  }
}
