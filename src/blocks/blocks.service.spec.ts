import { Test, TestingModule } from '@nestjs/testing';
import { BlocksService } from './blocks.service';
import CreateBlockDto from './interfaces/block-dto.dto';

describe('BlocksService', () => {
  let service: BlocksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlocksService],
    }).compile();

    service = module.get<BlocksService>(BlocksService);
  });

  it('should store blocks', () => {
    let testBlock: CreateBlockDto = { name: "minecraft:stone", x: 0, y: 0, z: 0};
    expect(service.store(testBlock)).toBeDefined();
    expect(service.findOne(testBlock.x)).toEqual(testBlock)
  });
});
