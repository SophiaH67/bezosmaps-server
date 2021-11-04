import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Block, BlockSchema } from '../schemas/block.schema';
import { BlocksService } from './blocks.service';
import CreateBlockDto from './interfaces/block-dto.dto';

describe('BlocksService', () => {
  let service: BlocksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [MongooseModule.forFeature([{ name: Block.name, schema: BlockSchema }])],
      providers: [BlocksService],
    }).compile();

    service = module.get<BlocksService>(BlocksService);
  });

  it('should store blocks', () => {
    let testBlock: CreateBlockDto = { name: "minecraft:stone", x: 123, y: 12, z: 31};
    expect(service.store(testBlock)).toBeDefined();
    expect(service.findOne(testBlock.x, testBlock.y, testBlock.z)).toEqual(testBlock)
  });
});
