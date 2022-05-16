import { PrismaService } from './prisma.service';
import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
