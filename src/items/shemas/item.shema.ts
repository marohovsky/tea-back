import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ItemDocument = HydratedDocument<Item>;

@Schema()
export class Item {
  @Prop({ required: true })
  typeOfProduct: string;

  @Prop()
  classOfProduct: string;

  @Prop({ uppercase: true })
  title: string;

  @Prop()
  description: string;

  @Prop()
  region: string;

  @Prop()
  collectionYear: Date;

  @Prop()
  yearOfPresetting: Date;

  @Prop()
  amount: number;

  @Prop()
  amountType: string;

  @Prop()
  step: number;

  @Prop()
  price: number;

  @Prop()
  stepVariants: string[];

  @Prop()
  mainImg: string;

  @Prop()
  images: string[];
}

export const ItemSchema = SchemaFactory.createForClass(Item);
