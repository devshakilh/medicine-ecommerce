

import { Request, Response } from 'express';

import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import userModel from '../models/userModel';

dotenv.config();

// Email Setup
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});


export const register = async (req: Request, res: Response) => {
  console.log('Request Body:', req.body); // Inspect form fields
  console.log('Uploaded File:', req.file); // Inspect uploaded file

  const { name, email, password } = req.body;
  const photo = req.file?.filename; // Access uploaded file

  if (!name || !email || !password) return res.status(400).json({ message: 'All fields are required.' });

  try {
    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists.' });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    const verificationTokenExpiry = new Date();
    verificationTokenExpiry.setHours(verificationTokenExpiry.getHours() + 1); // Token expires in 1 hour
    

    // Generate verification token
    const verificationToken = jwt.sign({ email }, process.env.JWT_SECRET!, { expiresIn: '10m' });

    // Create new user
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
      photo,
      verificationToken,
      verificationTokenExpiry
    });
    await newUser.save();

    // Send verification email
    const verificationUrl = `https://medicine-ecommerce.onrender.com/api/auth/verify/${verificationToken}`;
    await transporter.sendMail({
      to: email,
      subject: 'Email Verification',
      text: `Please verify your email by clicking the following link: ${verificationUrl}`
    });

    res.status(201).json({ message: 'User registered. Please check your email for verification.' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });
  if (!user) return res.status(400).json({ message: 'Invalid email or password.' });

  // Check if email is verified
  if (!user.isVerified) return res.status(400).json({ message: 'Email not verified.' });

  // Check password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid email or password.' });

  // Generate tokens
  const accessToken = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET!, { expiresIn: '1h' });
  const refreshToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, { expiresIn: '1d' });

  res.json({ accessToken, refreshToken });
};

export const verifyEmail = async (req: Request, res: Response) => {
  const { token } = req.params;
  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
    const user = await userModel.findOne({ email: decoded.email });

    if (!user) return res.status(404).json({ message: 'User not found.' });

    if (user.isVerified) return res.status(400).json({ message: 'Email already verified.' });

    if (!user.verificationTokenExpiry || user.verificationTokenExpiry < new Date()) {
      // Token has expired or verificationTokenExpiry is undefined
      return res.status(400).json({ message: 'Verification token has expired or is invalid.' });
    }

    user.isVerified = true;
    user.verificationToken = undefined; // Optionally clear the token
    user.verificationTokenExpiry = undefined; // Optionally clear the expiry date
    await user.save();

    res.status(200).json({ message: 'Email verified successfully!' });
  } catch (err) {
    res.status(400).json({ message: 'Invalid or expired token.' });
  }
};


export const refreshToken = async (req: Request, res: Response) => {
  const { refreshToken } = req.body;

  try {
    const decoded: any = jwt.verify(refreshToken, process.env.JWT_SECRET!);
    const user = await userModel.findById(decoded.userId);

    if (!user) return res.status(401).json({ message: 'Invalid refresh token.' });

    const newAccessToken = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET!, { expiresIn: '1h' });

    res.json({ accessToken: newAccessToken });
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired refresh token.' });
  }
};

export const resendVerification = async (req: Request, res: Response) => {
  const { refreshToken } = req.body;
  const { email } = req.body;

  if (!email) return res.status(400).json({ message: 'Email is required.' });

  try {
    const user = await userModel.findOne({ email });

    if (!user) return res.status(404).json({ message: 'User not found.' });
    if (user.isVerified) return res.status(400).json({ message: 'Email already verified.' });

    const verificationToken = jwt.sign({ email }, process.env.JWT_SECRET!, {
      expiresIn: '10m'
    });

    user.verificationToken = verificationToken;
    user.verificationTokenExpiry = new Date();
    user.verificationTokenExpiry.setHours(user.verificationTokenExpiry.getHours() + 1); // Token expires in 1 hour
    await user.save();

    const verificationUrl = `https://medicine-ecommerce.onrender.com/api/auth/verify/${verificationToken}`;
    await transporter.sendMail({
      to: email,
      subject: 'Email Verification',
      text: `Please verify your email by clicking the following link: ${verificationUrl}`
    });

    res.status(200).json({ message: 'Verification email resent. Please check your inbox.' });
  } catch (err) {
    res.status(500).json({ message: 'An error occurred while resending the verification email.' });
  }
};

