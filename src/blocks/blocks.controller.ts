import { Body, Controller, Get, Post } from '@nestjs/common'
import { BlocksService } from './blocks.service'
import CreateBlockDto from './interfaces/block-dto.dto'

@Controller('blocks')
export class BlocksController {
  constructor(private readonly blockService: BlocksService) {}

  @Get()
  findAll(): CreateBlockDto[] {
    return this.blockService.findAll()
  }

  @Post()
  store(@Body() block: CreateBlockDto): CreateBlockDto {
    return this.blockService.store(block)
  }
}
