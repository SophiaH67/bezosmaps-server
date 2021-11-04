import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { BlocksController } from './blocks/blocks.controller'
import { BlocksService } from './blocks/blocks.service';

@Module({
  imports: [],
  controllers: [AppController, BlocksController],
  providers: [AppService, BlocksService],
})
export class AppModule {}
