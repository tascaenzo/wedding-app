import { Injectable } from '@nestjs/common';
import { Prisma, PushMessage } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class NotificationsService {
  constructor(private readonly prismaService: PrismaService) {}

  async createNotification(
    data: Prisma.PushMessageCreateInput
  ): Promise<PushMessage> {
    return this.prismaService.pushMessage.create({ data });
  }

  async countNotification(): Promise<number> {
    return this.prismaService.pushMessage.count();
  }

  async getAllNotificatione(): Promise<PushMessage[]> {
    return this.prismaService.pushMessage.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }
}
