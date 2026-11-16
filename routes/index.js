let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET About me page. */
router.get('/aboutme', function(req, res, next) {
  res.render('about', { title: 'About me' });
});

module.exports = router;