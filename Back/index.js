const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const path = require('path');

app.use(cors("*"))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Connect session
require('./configs/session')(app);

// Connect mongodb
require('./configs/db')();
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));
app.use(require('./routes'));
app.use(express.json()); // ✅ This is critical

// If you're also sending form data, add:
app.use(express.urlencoded({ extended: true }));



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

