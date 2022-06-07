import { PrismaService } from './../prisma.service';
import { Injectable } from '@nestjs/common';
import { ChatMessage } from '@prisma/client';
import moment = require('moment');

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
    const utcDate = new Date();
    const timeZone = 'Europe/Rome';
    const dateObject = new Date(utcDate).toLocaleString('en-US', {
      timeZone,
    });

    const time = dateObject.split(' ')[1];
    const arrTime = time.split(':');

    return await this.prismaService.chatMessage.create({
      data: {
        message: data.message,
        time: `${arrTime[0]}:${arrTime[1]}`,
        User: { connect: { id: data.userId } },
      },
      include: { User: true },
    });
  }
}
