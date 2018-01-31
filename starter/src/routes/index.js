var express = require('express');

// import auth from './auth'
// import users from './users'

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home')
});

// router.use('/auth', auth)
// router.use('/users', users)

module.exports = router;
