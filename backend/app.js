const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());

// CORS configuration
const corsOptions = {
    origin: ['http://localhost:5173', 'https://cocox-frontend.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define a Contact schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String
});

const Contact = mongoose.model('Contact', contactSchema);

// Create transporter outside request handler for reuse
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// Endpoint to save contact info and send email
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Save to database
    const contact = new Contact({ name, email, subject, message });
    await contact.save();

    // Send email
    const mailOptions = {
      from: process.env.FROM_EMAIL,
      to: email,
      subject: 'Thank you for contacting us',
      text: `Hi ${name},\n\nThank you for your message: "${message}". We will get back to you soon.\n\nBest regards,\nCocox`
    };

    await transporter.sendMail(mailOptions);
    
    res.status(200).json({
      success: true,
      message: 'Contact information saved and email sent successfully'
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your request',
      error: error.message
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
