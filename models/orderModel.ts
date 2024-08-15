import mongoose, { Document } from 'mongoose';

interface IOrder extends Document {
  user: mongoose.Schema.Types.ObjectId;
  products: Array<{ product: mongoose.Schema.Types.ObjectId; quantity: number }>;
  status: string;
  totalAmount: number;
  shippingAddress: string;
}

const orderSchema = new mongoose.Schema<IOrder>({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [{ product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, quantity: { type: Number, required: true } }],
  status: { type: String, default: 'Pending' },
  totalAmount: { type: Number, required: true },
  shippingAddress: { type: String, required: true },
});

const Order = mongoose.model<IOrder>('Order', orderSchema);

export default Order;
