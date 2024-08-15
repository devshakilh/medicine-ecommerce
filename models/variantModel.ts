import mongoose, { Document } from 'mongoose';

interface IVariant extends Document {
  name: string;
  price: number;
}

const variantSchema = new mongoose.Schema<IVariant>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

const Variant = mongoose.model<IVariant>('Variant', variantSchema);

export default Variant;
