const express = require('express');
const joiValidation = require('../middlewares/joiValidation');
const auth = require('../middlewares/auth');
// const { } = require('../schemas'); // You can remove or use schemas if needed
const router = express.Router();

const productService = require('../services/product');

// Get product by ID (Protected)
router.get('/id/:id', auth.ensureSignedIn, async (req, res) => {
  try {
    const { id } = req.params;
    const result = await productService.findById(id);
    res.json(result);
  } catch (err) {
    console.error('Error fetching product by ID:', err);
    res.status(500).json({ error: 'Failed to fetch product' });
  }
});

// Get all products (Public)
router.get('/all/:category?/:item?', async (req, res) => {
  try {
    const { category, item } = req.params;
    const result = await productService.findAll(category, item);
    res.json(result);
  } catch (err) {
    console.error('Error fetching all products:', err);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Create product (Public)
// example route
router.post('/create', async (req, res, next) => {
  try {
    const { title, category, item, user, imageUrl, desc } = req.body;

    const result = await productService.create({
      title,
      category,
      item,
      user,
      imageUrl,
      desc,
    });

    res.json(result);
  } catch (err) {
    next(err); // this triggers the error handler
  }
});

// Update product (Protected)
router.post('/update', auth.ensureSignedIn, async (req, res) => {
  try {
    const { id, ...data } = req.body;
    const result = await productService.update(id, data);
    res.json(result);
  } catch (err) {
    console.error('Error updating product:', err);
    res.status(500).json({ error: 'Failed to update product' });
  }
});

// Delete product (Protected)
router.post('/delete', auth.ensureSignedIn, async (req, res) => {
  try {
    const { id } = req.body;
    const result = await productService.delete(id);
    res.json({ success: true, result });
  } catch (err) {
    console.error('Error deleting product:', err);
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

module.exports = router;
