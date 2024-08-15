// utils/emailService.ts
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'Gmail', // You can use other email services like SendGrid, Mailgun, etc.
  auth: {
    user: process.env.USER, // Your email address
    pass: process.env.PASS, // Your email password
  },
});

export const sendVerificationEmail = async (to: string, token: string) => {
  const verificationUrl = `http://localhost:5000/verify-email?token=${token}`;

  await transporter.sendMail({
    from: process.env.USER,
    to,
    subject: 'Email Verification',
    html: `<p>Click <a href="${verificationUrl}">here</a> to verify your email address.</p>`,
  });
};
