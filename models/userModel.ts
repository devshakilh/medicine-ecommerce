import mongoose from 'mongoose';

interface IUser extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  photo?: string;
  role: 'super_admin' | 'admin' | 'user';
  isVerified: boolean;
  verificationToken?: string;
  verificationTokenExpiry?: Date; // Add this field
}

const userSchema = new mongoose.Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  photo: { type: String },
  role: { type: String, enum: ['super_admin', 'admin', 'user'], default: 'user' },
  isVerified: { type: Boolean, default: false },
  verificationToken: { type: String },
  verificationTokenExpiry: { type: Date } // Add this field
});

const User = mongoose.model<IUser>('User', userSchema);
export default User;
