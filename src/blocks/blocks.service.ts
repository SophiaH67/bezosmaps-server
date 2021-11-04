import { Injectable } from '@nestjs/common';
import { Block } from '../schemas/block.schema';

@Injectable()
export class BlocksService {
  private readonly blocks: Block[] = [];

  findAll(): Block[] {
    return this.blocks;
  }

  findOne(x: number): Block {
    return this.blocks.find(block => block.x === x);
  }

  create(block: Block): Block {
    this.blocks.push(block);
    return block;
  }

  store(block: Block): Block {
    const index = this.blocks.findIndex(b => b.x === block.x);
    this.blocks[index] = block;
    return block;
  }
}
