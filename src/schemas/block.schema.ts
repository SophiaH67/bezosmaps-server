import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BlockDocument = Block & Document;

@Schema()
export class Block {
  @Prop()
  name: string

  @Prop({ type: { type: String, waterlogged: Boolean, facing: String} })
  state?: {
    waterlogged?: boolean
    powered?: boolean
    facing?: string
  }

  @Prop({ required: true, index: true, unique: true })
  x: number

  @Prop({ required: true, index: true, unique: true })
  y: number

  @Prop({ required: true, index: true, unique: true })
  z: number
}

export const BlockSchema = SchemaFactory.createForClass(Block);