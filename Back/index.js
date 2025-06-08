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
// app.post('/create', async (req, res, next) => {
//   try {
//     const { id, name, images, price, shortDesc, fullDesc, variants } = req.body;

//     const result = await productService.create({
//       id,
//       name,
//       images,
//       price,
//       shortDesc,
//       fullDesc,
//       variants
//     });

//     res.json({ success: true, product: result });
//   } catch (err) {
//     next(err);
//   }
// });
const Product = require('./models/Product');

app.post('/create/products', async (req, res, next) => {
  try {
    const { name, images, price, shortDesc, fullDesc, variants } = req.body;
    const newProduct = new Product({ name, images, price, shortDesc, fullDesc, variants });
    const savedProduct = await newProduct.save();
    res.status(201).json({ success: true, product: savedProduct });
  } catch (err) {
    next(err);
  }
});
app.get('/products', async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json({ success: true, products });
  } catch (err) {
    next(err);
  }
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
