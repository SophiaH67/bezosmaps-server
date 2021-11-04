import { Test, TestingModule } from '@nestjs/testing'
import { BlocksController } from './blocks.controller'

describe('BlocksController', () => {
  let controller: BlocksController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlocksController],
    }).compile()

    controller = module.get<BlocksController>(BlocksController)
  })

  it('should return all blocks', () => {
    expect(controller.findAll()).toBeInstanceOf(Array)
  })
})
