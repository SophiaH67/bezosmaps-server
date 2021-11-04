import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { BlocksModule } from './blocks/blocks.module';
import { PathModule } from './path/path.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://user:pass@localhost:27017'), BlocksModule, PathModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
