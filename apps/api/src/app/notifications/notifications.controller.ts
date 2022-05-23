import { Body, Controller, Get, Post } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { WebSocketServer } from '@nestjs/websockets';
import { PushMessage, Prisma } from '@prisma/client';
import { Server } from 'socket.io';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationService: NotificationsService) {}

  @WebSocketServer()
  server: Server;

  @Get()
  async findAllNotification(): Promise<PushMessage[]> {
    return this.notificationService.getAllNotificatione();
  }

  @Get('count')
  async countNotification(): Promise<{ notifications: number }> {
    const notifications = await this.notificationService.countNotification();

    return { notifications };
  }

  @Post()
  async createNotification(
    @Body() push: Prisma.PushMessageCreateInput
  ): Promise<PushMessage> {
    const data = await this.notificationService.createNotification(push);
    const count = await this.notificationService.countNotification();

    this.server.emit('notification_count', count);
    return data;
  }
}
