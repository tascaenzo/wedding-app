import { Injectable } from '@nestjs/common';
import fs = require('fs');
import { nanoid } from 'nanoid';
import { PrismaService } from '../prisma.service';

@Injectable()
export class GalleryService {
  constructor(private readonly prismaService: PrismaService) {}

  async getMedia() {
    return await this.prismaService.media.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async toFile(file, name: string, userId: string) {
    const fileName = `${nanoid()}_${name}`;
    try {
      fs.writeFileSync(`${process.env.NX_UPLOAD_FILE}/${fileName}`, file);
      return await this.prismaService.media.create({
        data: {
          url: `${process.env.NX_API_HOST}/static/${fileName}`,
          userId,
        },
      });
    } catch (err) {
      console.error(err);
    }
  }
}
