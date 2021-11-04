import { Body, Controller, Get, Post } from '@nestjs/common'
import CreateBlockDto from './block-dto.dto'

@Controller('blocks')
export class BlocksController {
  @Get()
  findAll(): CreateBlockDto[] {
    return []
  }

  @Post()
  store(@Body() block: CreateBlockDto): CreateBlockDto {
    return block
  }
}
