import { ChatController } from './chat.controller';
import { PrismaService } from '../prisma.service';
import { ChatGateway } from './chat.gateway';
import { ChatService } from './chat.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [ChatController],
  providers: [ChatGateway, ChatService, PrismaService],
})
export class ChatModule {}
