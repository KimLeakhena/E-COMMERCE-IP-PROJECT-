const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();

app.use(cors("*"))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Connect session
require('./configs/session')(app);

// Connect mongodb
require('./configs/db')();

app.use(require('./routes'));

app.use((err, req, res, next) => {
  return res.json({
    success: false,
    code: 0,
    error: err
  })
})


app.listen(process.env.PORT || 3000, () => console.log('App avaiable on https://api.ahna.store/'))

