const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());

// Updated CORS configuration
const corsOptions = {
  origin: ['http://localhost:5173', 'https://cocox-frontend.vercel.app'], 
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'], 
    credentials: true,
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Define a Contact schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: false, // Use false for 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Test SMTP connection
transporter.verify((error, success) => {
  if (error) {
    console.error('SMTP connection error:', error);
  } else {
    console.log('SMTP server is ready');
  }
});

// Contact endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Save contact info to the database
    const contact = new Contact({ name, email, subject, message });
    await contact.save();

    // Send acknowledgment email to the user
    const mailOptionsToUser = {
      from: process.env.FROM_EMAIL,
      to: email,
      subject: 'Thank you for contacting Cocox',
      text: `Hi ${name},\n\nThank you for your message: "${message}". We will get back to you soon.\n\nBest regards,\nCocox`,
    };

    await transporter.sendMail(mailOptionsToUser);

    // Send email to the marketing team
    const mailOptionsToMarketing = {
      from: process.env.FROM_EMAIL,
      to: process.env.MARKETING_EMAIL,
      subject: 'New Contact Form Submission',
      text: `New contact form submission:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptionsToMarketing);

    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error in /api/contact:', error);
    res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Global error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined,
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
