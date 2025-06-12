const express = require('express');
const auth = require('../middlewares/auth');
const router = express.Router();
const productService = require('../services/product');
const upload = require('../uploads/uploads');
const mongoose = require('mongoose');


// Get product by ID (Protected)
// router.get('/:id', async (req, res) => {
//   try {
//     const product = await productService.findById(req.params.id);
//     if (!product) {
//       return res.status(404).json({ success: false, message: 'Product not found' });
//     }
//     res.status(200).json({ success: true, data: product });
//   } catch (error) {
//     console.error('Error fetching product by ID:', error.message);
//     res.status(400).json({ success: false, error: error.message });
//   }
// });



// Get all products with optional filters (Public)


router.get('/all', async (req, res) => {


  const result = await productService.findAll();
  res.json(result);

});





router.post('/upload/multiple', upload.array('images', 10), (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      console.error('No files received');
      return res.status(400).json({ error: 'No files uploaded' });
    }

    console.log('Uploaded files:', req.files);

    const filePaths = req.files.map((file) => `/uploads/${file.filename}`);
    res.json({ success: true, imageUrls: filePaths });
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ error: 'Upload failed' });
  }
});



// Create product with image upload
router.post('/create', async (req, res) => {
  try {

    const { name, price, category, fullDesc, variants, images, description, originalPrice, sku, features } = req.body;

    const result = await productService.create({
      name,
      price,

      fullDesc,
      variants: variants ? variants.split(',') : [],
      images: images || [], // This is now an array of image URLs
      category,
      description, originalPrice, features
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
// Get product by ID (Protected)
router.get('/:id', async (req, res) => {
  try {
    const product = await productService.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    console.error('Error fetching product by ID:', error.message);
    res.status(400).json({ success: false, error: error.message });
  }
});



module.exports = router;
