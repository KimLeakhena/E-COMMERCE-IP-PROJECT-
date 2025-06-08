// routes/product.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
router.post('/', upload.array('images', 5), async (req, res) => {
  try {
    const imagePaths = req.files.map(file => `/uploads/${file.filename}`);
    const product = new Product({
      ...req.body,
      images: imagePaths
    });

    const saved = await product.save();
    res.json({ success: true, product: saved });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});
// CREATE a new product
router.post('/', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.json({ success: true, product: savedProduct });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// READ all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ success: true, products });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// READ one product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ success: false, error: 'Product not found' });
    res.json({ success: true, product });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// UPDATE product by ID
router.put('/:id', async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ success: false, error: 'Product not found' });
    res.json({ success: true, product: updated });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// DELETE product by ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, error: 'Product not found' });
    res.json({ success: true, message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
