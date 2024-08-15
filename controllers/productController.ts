import { Request, Response } from 'express';
import Product from '../models/productModel';


// Create Product
export const createProduct = async (req: Request, res: Response) => {
  try {
    const {
      name,
      slug,
      photos,
      description,
      metaKey,
      price,
      discount,
      stockStatus,
      status,
      categories,
      variants
    } = req.body;

    const newProduct = new Product({
      name,
      slug,
      photos,
      description,
      metaKey,
      price,
      discount,
      stockStatus,
      status,
      categories,
      variants
    });

    await newProduct.save();

    res.status(201).json({ message: 'Product created successfully', product: newProduct });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};


  
  // Get Products
  export const getProducts = async (req: Request, res: Response) => {
    try {
      const products = await Product.find(); // Fetch all products
      res.status(200).json(products);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'An unknown error occurred' });
      }
    }
  };


  // Get Product by ID
export const getProductById = async (req: Request, res: Response) => {
  const productId = req.params.id;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};



// Update Product
export const updateProduct = async (req: Request, res: Response) => {
  const productId = req.params.id;
  const updateData = req.body;

  try {
    const product = await Product.findByIdAndUpdate(productId, updateData, { new: true });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete Product
export const deleteProduct = async (req: Request, res: Response) => {
  const productId = req.params.id;

  try {
    const product = await Product.findByIdAndDelete(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
