import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Block, BlockDocument } from '../schemas/block.schema';

@Injectable()
export class BlocksService {
  constructor(@InjectModel(Block.name) private blockModel: Model<BlockDocument>) {}

  async findAll(): Promise<Block[]> {
    return this.blockModel.find().exec()
  }

  async store(block: Block): Promise<Block> {
    const newBlock = new this.blockModel(block);
    return newBlock.save();
  }

  async findOne(x: number, y: number, z: number): Promise<Block> {
    return (await this.blockModel.findOne({ x, y, z }).exec()) || { name: "marnix:404", x, y, z }
  }

  async update(block: Block): Promise<Block> {
    return this.blockModel.findOneAndUpdate({ x: block.x, y: block.y, z: block.z }, block)
  }

}
