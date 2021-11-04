import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { BlocksController } from './blocks/blocks.controller'
import { BlocksService } from './blocks/blocks.service';
import { BlocksModule } from './blocks/blocks.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://user:pass@localhost:27017'), BlocksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
