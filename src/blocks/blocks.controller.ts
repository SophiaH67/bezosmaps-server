import { Controller, Get } from '@nestjs/common'
import Block from 'src/interfaces/block'

@Controller('blocks')
export class BlocksController {
  @Get()
  findAll(): Block[] {
    return []
  }
}
