import { Test, TestingModule } from '@nestjs/testing'
import { BlocksController } from './blocks.controller'
import { BlocksService } from './blocks.service'

describe('BlocksController', () => {
  let controller: BlocksController
  let service: BlocksService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlocksController],
      providers: [BlocksService],
    }).compile()

    controller = module .get<BlocksController>(BlocksController)
  })

  it('should return all blocks', () => {
    expect(controller.findAll()).toBeInstanceOf(Array)
  })

  it('should store new blocks and return them', () => {
    let testBlock = {name: "minecraft:air", x: 1, y: 1, z: 1}
    expect(controller.store(testBlock)).toMatchObject(testBlock)
    expect(controller.findAll()).toContainEqual(testBlock)
  })
})
