import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BlockDocument = Block & Document;

@Schema()
export class Block {
  @Prop()
  name: string

  @Prop()
  state?: {
    waterlogged?: boolean
    powered?: boolean
    facing?: string
    [key: string]: any
  }

  @Prop()
  tags?: {
    [key: string]: any
  }

  @Prop()
  x: number

  @Prop()
  y: number

  @Prop()
  z: number
}

export const BlockSchema = SchemaFactory.createForClass(Block);