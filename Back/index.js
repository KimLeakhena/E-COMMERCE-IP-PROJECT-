require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());  // Allow all origins
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Simple test GET
app.get('/api/test', (req, res) => {
  res.json({ message: 'Test route working' });
});

// Simple POST /create to test input
app.post('/create', (req, res) => {
  // Just return the received data
  const { title, category, item, user, imageUrl, desc } = req.body;

  console.log('Received /create data:', req.body);

  res.json({
    success: true,
    message: 'Data received successfully',
    data: { title, category, item, user, imageUrl, desc }
  });
});

// Error handler
app.use((err, req, res, next) => {
  return res.status(500).json({
    success: false,
    code: 0,
    error: err.message || 'Internal Server Error',
    stack: process.env.NODE_ENV !== 'production' ? err.stack : undefined
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
