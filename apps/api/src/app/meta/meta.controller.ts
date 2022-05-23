import { MetaService } from './meta.service';
import { Body, Controller, Get, Param, Put } from '@nestjs/common';

@Controller('meta')
export class MetaController {
  constructor(private readonly metaService: MetaService) {}

  @Put(':key')
  async update(@Body() dto: { value: boolean }, @Param('key') key: string) {
    const data = await this.metaService.update(key, dto.value);
    return { ...data, value: data.value === 'true' };
  }

  @Get(':key')
  async get(@Param('key') key: string) {
    const data = await this.metaService.findOne(key);
    return { ...data, value: data.value === 'true' };
  }
}
