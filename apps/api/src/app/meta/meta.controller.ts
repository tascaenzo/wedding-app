import { MetaService } from './meta.service';
import { Body, Controller, Get, Param, Put } from '@nestjs/common';

@Controller('meta')
export class MetaController {
  constructor(private readonly metaService: MetaService) {}

  @Put(':key')
  async update(@Body() dto: { value: boolean }, @Param('key') key: string) {
    return this.metaService.update(key, dto.value);
  }

  @Get(':key')
  async get(@Param('key') key: string) {
    const data = await this.metaService.findOne(key);

    return { ...data, value: Boolean(data.value) };
  }
}
