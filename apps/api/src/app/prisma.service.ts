import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
    this.enableSoftDelete();
    this.disableUpdateOnDeleted();
  }

  async enableSoftDelete() {
    this.$use(async (params, next) => {
      if (params.action == 'delete') {
        params.action = 'update';
        params.args['data'] = { deletedAt: new Date() };
      }

      if (params.action == 'deleteMany') {
        params.action = 'updateMany';

        if (params.args.data != undefined) {
          params.args.data['deleted'] = true;
        } else {
          params.args['data'] = { deletedAt: new Date() };
        }
      }

      return next(params);
    });
  }

  async disableUpdateOnDeleted() {
    this.$use(async (params, next) => {
      if (params.action == 'update') {
        // Change to updateMany - you cannot filter
        // by anything except ID / unique with findUnique
        params.action = 'updateMany';
        params.args.where['deleted'] != null;
      }

      if (params.action == 'updateMany') {
        if (params.args.where != undefined) {
          params.args.where['deleted'] != null;
        } else {
          params.args['where'] = { deleted: !null };
        }
      }

      return next(params);
    });
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
