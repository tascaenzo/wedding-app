import { PrismaService } from './../prisma.service';
import { Injectable } from '@nestjs/common';
import { ChatMessage } from '@prisma/client';

@Injectable()
export class ChatService {
  constructor(private readonly prismaService: PrismaService) {}

  async countMessage(): Promise<number> {
    return this.prismaService.chatMessage.count();
  }

  async getAllMessage(): Promise<ChatMessage[]> {
    return this.prismaService.chatMessage.findMany({
      include: { User: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async createChatMessage(data: {
    message: string;
    userId: string;
  }): Promise<ChatMessage> {
    return await this.prismaService.chatMessage.create({
      data: { message: data.message, User: { connect: { id: data.userId } } },
      include: { User: true },
    });
  }
}
