import { Request, Response } from 'express';
import Category from '../models/categoryModel';


// Create Category
export const createCategory = async (req: Request, res: Response) => {
    const { name, slug, thumbnail } = req.body;
  
    try {
      const category = new Category({ name, slug, thumbnail });
      await category.save();
      res.status(201).json(category);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  // Get Categories
  export const getCategories = async (req: Request, res: Response) => {
    try {
      const categories = await Category.find();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };

// Update Category
export const updateCategory = async (req: Request, res: Response) => {
  const categoryId = req.params.id;
  const updateData = req.body;

  try {
    const category = await Category.findByIdAndUpdate(categoryId, updateData, { new: true });
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json(category);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete Category
export const deleteCategory = async (req: Request, res: Response) => {
  const categoryId = req.params.id;

  try {
    const category = await Category.findByIdAndDelete(categoryId);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json({ message: 'Category deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
