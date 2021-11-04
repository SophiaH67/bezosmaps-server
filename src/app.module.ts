import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { BlocksController } from './blocks/blocks.controller'

@Module({
  imports: [],
  controllers: [AppController, BlocksController],
  providers: [AppService],
})
export class AppModule {}
