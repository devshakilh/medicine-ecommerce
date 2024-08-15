import mongoose, { Document } from 'mongoose';

interface ICategory extends Document {
  name: string;
  slug: string;
  thumbnail: string;
}

const categorySchema = new mongoose.Schema<ICategory>({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  thumbnail: { type: String },
});

const Category = mongoose.model<ICategory>('Category', categorySchema);

export default Category;
