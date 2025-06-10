const express = require('express');
const auth = require('../middlewares/auth');
const router = express.Router();
const productService = require('../services/product');
const upload = require('../uploads/uploads');

// Get product by ID (Protected)
router.get('/id/:id', auth.ensureSignedIn, async (req, res) => {
  try {
    const { id } = req.params;
    const result = await productService.findById(id);
    if (!result) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(result);
  } catch (err) {
    console.error('Error fetching product by ID:', err);
    res.status(500).json({ error: 'Failed to fetch product' });
  }
});

// Get all products with optional filters (Public)


// router.get('/all', async (req, res) => {
//   try {

//     const result = await productService.findAll(category, search, page, limit);
//     res.json(result);
//   } catch (err) {
//     console.error('Error fetching all products:', err);
//     res.status(500).json({ error: 'Failed to fetch products' });
//   }
// });

router.get('/all', async (req, res) => {

  const result = await productService.findAll();
  res.json(result);
});


// Create product with image upload
router.post('/create', upload.array('images', 10), async (req, res) => {
  try {
    const { name, price, category, shortDesc, fullDesc, variants } = req.body;
    const images = req.files.map(file => `/uploads/${file.filename}`);

    const result = await productService.create({
      name,
      price,
      shortDesc,
      fullDesc,
      variants: variants ? variants.split(',') : [],
      images,
      category,
    });


    res.json(result);
  } catch (err) {
    console.error('Error creating product:', err.message);
    res.status(500).json({ success: false, error: err.message });
  }
});



// Update product (Protected)
// Update product using PUT and URL param (Protected)
router.put('/update/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
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
    const result = await productService.remove(id);
    res.json({ success: true, result });
  } catch (err) {
    console.error('Error deleting product:', err);
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

router.get('/category/:categoryId/products', async (req, res) => {
  const { categoryId } = req.params;
  try {
    const products = await getProductsByCategory(categoryId);
    res.json(products);
  } catch (error) {
    console.error('Failed to get products by category:', error);
    res.status(500).json({ error: 'Failed to get products by category' });
  }
});


module.exports = router;
