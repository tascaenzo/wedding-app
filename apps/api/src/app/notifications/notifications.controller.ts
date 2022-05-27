import { Body, Controller, Get, Post } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { PushMessage, Prisma } from '@prisma/client';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationService: NotificationsService) {}

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
    return this.notificationService.createNotification(push);
  }
}
