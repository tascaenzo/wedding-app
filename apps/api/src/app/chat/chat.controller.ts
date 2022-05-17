import { Controller, Get } from '@nestjs/common';
import { ChatMessage } from '@prisma/client';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get('count')
  async countMessage(): Promise<{ message: number }> {
    const message = await this.chatService.countMessage();
    return { message };
  }

  @Get()
  async getAllMessage(): Promise<ChatMessage[]> {
    return await this.chatService.getAllMessage();
  }
}
