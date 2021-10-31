/* eslint-disable indent */
import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  email: string;

  @Prop()
  name: string;

  @Prop()
  imageUrl: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
