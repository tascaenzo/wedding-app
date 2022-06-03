import { TablesModule } from './tables/tables.module';
import { NotificationsModule } from './notifications/notifications.module';
import { PrismaService } from './prisma.service';
import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { ChatModule } from './chat/chat.module';
import { MetaModule } from './meta/meta.module';
import { GalleryModule } from './gallery/gallery.module';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    UsersModule,
    ChatModule,
    NotificationsModule,
    MetaModule,
    TablesModule,
    GalleryModule,
    ServeStaticModule.forRoot({
      rootPath: process.env.NX_UPLOAD_FILE,
      exclude: ['/api*'],
    }),
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
