import bcrypt from 'bcrypt';
import express from 'express';
import connectDB from './config/db';
import cors from 'cors';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes'
import categoryRoutes from './routes/categoryRoutes';
import productRoutes from './routes/productRoutes';
import orderRoutes from './routes/orderRoutes';
import userRoutes from './routes/userRoutes';
import dotenv from 'dotenv';
import multer from 'multer';
import path from 'path';

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

app.use(express.json());



app.use(cors({
    origin: 'https://medicine-ecommerce.onrender.com', // Replace with your frontend URL if different
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // If you're using cookies or other credentials
  }));

  // const upload = multer({ dest: 'uploads/' });


  const upload = multer({ dest: 'public/uploads/' });
  app.use('/uploads', express.static('public/uploads'));
  
  // Register routes
  app.use('/api/auth', upload.single('photo'), authRoutes);
  
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
