var express = require('express');
const joiValidation = require('../middlewares/joiValidation');
const auth = require('../middlewares/auth');
const { } = require('../schemas');
var router = express.Router();
const categoryService = require('../services/category');

router.get('/id/:id', auth.ensureSignedIn, async function (req, res) {
  const { id } = req.params;
  const result = await categoryService.findById(id);
  res.json(result);
})

// Categorized items
router.get('/categorized-items', async (req, res) => {
  const result = await categoryService.findCategorizedItems()
  res.json(result);
})

// router.post('/create', auth.ensureSignedIn, async (req, res, next) => {

//   const { name, desc, imageUrl } = req.body;
//   const result = await categoryService.create({ name, desc, imageUrl })
//   res.json(result);
// })

router.post('/create', async (req, res, next) => {
  try {
    console.log("Received body:", req.body);

    const { name, desc, imageUrl } = req.body;

    if (!name) {
      return res.status(400).json({ success: false, error: "Name is required" });
    }

    const result = await categoryService.create({ name, desc, imageUrl });

    res.json({ success: true, data: result });
  } catch (err) {
    console.error("Error in /category/create:", err);
    res.status(500).json({ success: false, code: 0, error: err.message || "Internal Server Error" });
  }
});


// all categories
router.get('/all', async (req, res) => {
  const result = await categoryService.findAll()
  res.json(result);
})

router.post('/update', auth.ensureSignedIn, async (req, res, next) => {
  // to do
  res.json({});
})

router.post('/delete', auth.ensureSignedIn, async (req, res, next) => {
  // to do
  res.json({});
})

module.exports = router