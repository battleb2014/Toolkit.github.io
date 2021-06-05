var express = require('express');
var router = express.Router();

// Routers
const indexRouter = require('./indexRouter');


router.use('/', indexRouter);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to Artisan\'s Toolkit' });
});

module.exports = router;
