import { TablesModule } from './tables/tables.module';
import { NotificationsModule } from './notifications/notifications.module';
import { PrismaService } from './prisma.service';
import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { ChatModule } from './chat/chat.module';
import { MetaModule } from './meta/meta.module';
import { GalleryModule } from './gallery/gallery.module';

@Module({
  imports: [
    UsersModule,
    ChatModule,
    NotificationsModule,
    MetaModule,
    TablesModule,
    GalleryModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
