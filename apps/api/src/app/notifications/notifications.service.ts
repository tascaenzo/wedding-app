import { Injectable } from '@nestjs/common';
import { WebSocketGateway } from '@nestjs/websockets';
import { Prisma, PushMessage } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@Injectable()
@WebSocketGateway({ cors: true })
export class NotificationsService {
  constructor(private readonly prismaService: PrismaService) {}

  @WebSocketServer()
  server: Server;

  async createNotification(
    data: Prisma.PushMessageCreateInput
  ): Promise<PushMessage> {
    const utcDate = new Date();
    const timeZone = 'Europe/Rome';
    const dateObject = new Date(utcDate).toLocaleString('en-US', {
      timeZone,
    });

    const time = dateObject.split(' ')[1];
    const arrTime = time.split(':');

    const resp = await this.prismaService.pushMessage.create({
      data: {
        ...data,
        time: `${arrTime[0]}:${arrTime[1]}`,
      },
    });
    const count = await this.countNotification();

    this.server.emit('notification_count', count);

    return resp;
  }

  async countNotification(): Promise<number> {
    return this.prismaService.pushMessage.count();
  }

  async getAllNotificatione(): Promise<PushMessage[]> {
    return this.prismaService.pushMessage.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async remove(id: string) {
    this.prismaService.pushMessage.delete({ where: { id } });
    const count = await this.countNotification();

    this.server.emit('notification_count', count);
  }
}
