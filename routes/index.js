var express = require('express');
var router = express.Router();

// Routers
const indexRouter = require('./landingPageRouter');


router.use('/', indexRouter);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('landingPage', { title: 'Welcome to Artisan\'s Toolkit' });
});

module.exports = router;
