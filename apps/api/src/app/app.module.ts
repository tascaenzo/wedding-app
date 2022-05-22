import { NotificationsModule } from './notifications/notifications.module';
import { PrismaService } from './prisma.service';
import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { ChatModule } from './chat/chat.module';
import { MetaModule } from './meta/meta.module';

@Module({
  imports: [UsersModule, ChatModule, NotificationsModule, MetaModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
