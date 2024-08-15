import mongoose, { Schema, Document } from 'mongoose';

interface IVariant {
  name: string;
  price: number;
}

interface IProduct extends Document {
  name: string;
  slug: string;
  photos: string[];
  description: string;
  metaKey: string;
  price: number;
  discount: number;
  stockStatus: boolean;
  status: boolean;
  categories: mongoose.Types.ObjectId[];
  variants: IVariant[];
}

const productSchema: Schema = new Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  photos: [{ type: String }],
  description: { type: String, required: true },
  metaKey: { type: String },
  price: { type: Number, required: true },
  discount: { type: Number },
  stockStatus: { type: Boolean, required: true },
  status: { type: Boolean, required: true },
  categories: [{ type: Schema.Types.ObjectId, ref: 'Category', required: true }],
  variants: [
    {
      name: { type: String, required: true },
      price: { type: Number, required: true }
    }
  ]
});

export default mongoose.model<IProduct>('Product', productSchema);
