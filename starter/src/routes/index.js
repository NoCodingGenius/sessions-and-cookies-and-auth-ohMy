var express = require('express');

const { signUp } = require('../models/db/users');

//import auth from './auth'
// import users from './users'

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home')
});

router.get('/dashboard', function(req, res, next) {
  res.render('dashboard')
});

router.get('/signup', (req, res, next) => {
  res.render('auth')
});

router.post('/signup', (req, res, next) => {
  signUp(req.body)
  .then((user) => {
    res.redirect('/dashboard')
  })
  .catch(next)
});

//router.use('/auth', auth)
// router.use('/users', users)

module.exports = router;
