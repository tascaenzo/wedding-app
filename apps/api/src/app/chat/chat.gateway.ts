import { ChatService } from './chat.service';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ cors: true })
export class ChatGateway {
  constructor(private readonly chatService: ChatService) {}

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('message')
  async handleMessage(
    @MessageBody() message: { message: string; userId: string }
  ) {
    const data = await this.chatService.createChatMessage(message);
    const count = await this.chatService.countMessage();

    this.server.emit('message', data);
    this.server.emit('message_count', count)
  }
}
