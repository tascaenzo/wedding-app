import { Injectable } from '@nestjs/common';
import fs = require('fs');
import { nanoid } from 'nanoid';

@Injectable()
export class GalleryService {
  async toFile(file, name: string) {
    const fileName = `${nanoid()}_${name}`;
    try {
      fs.writeFileSync(`${process.env.NX_UPLOAD_FILE}/${fileName}`, file);
      return fileName;
    } catch (err) {
      console.error(err);
    }
  }
}
