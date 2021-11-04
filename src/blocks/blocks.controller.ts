import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common'
import { Block } from '../schemas/block.schema'
import { BlocksService } from './blocks.service'
import CreateBlockDto from './interfaces/block-dto.dto'

@Controller('blocks')
export class BlocksController {
  constructor(private readonly blockService: BlocksService) {}

  @Get()
  async findAll(): Promise<Block[]> {
    return this.blockService.findAll()
  }

  @Post()
  async store(@Body() block: CreateBlockDto): Promise<CreateBlockDto> {
    console.log(block)
    return this.blockService.store(block)
  }

  @Get('/:x/:y/:z')
  async findOne(@Param('x', ParseIntPipe) x, @Param('y', ParseIntPipe) y, @Param('z', ParseIntPipe) z): Promise<Block> {
    return this.blockService.findOne(x, y, z)
  }

}
