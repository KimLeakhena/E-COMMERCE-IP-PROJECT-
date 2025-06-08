var express = require('express');
const joiValidation = require('../middlewares/joiValidation');
const auth = require('../middlewares/auth');
const { signInSchema, signUpSchema } = require('../schemas');
var router = express.Router();
const { login } = require('../services/login')
const { register } = require('../services/register');
const userService = require('../services/user');
const { logout } = require('../services/logout');

router.get('/me', auth.ensureSignedIn, async (req, res) => {
  res.json(req.user);
});


router.post('/logout', auth.ensureSignedIn, async (req, res) => {
  const result = logout(req.session);
  return res.json(result);
})

router.post('/login', auth.ensureSignedOut, joiValidation(signInSchema), async (req, res, next) => {
  const { email, password } = req.body;
  const result = await login(email, password);
  req.session.jwt = result?.data?.token

  res.json(result);
})

router.post('/register', joiValidation(signUpSchema), async (req, res, next) => {
  try {
    const createdUser = await register(req.body);
    res.json(createdUser);
  } catch (err) {
    next(err); // so it triggers your error handler
  }
});


module.exports = router