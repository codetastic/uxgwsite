var express = require('express');
var router = express.Router();

// GET home page
// Everytime I access '/' it redirects to '/site' and it works
// index.js -> site.js
router.get('/', function(req, res) {
  res.redirect('/site');
});

/* GET home page.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Yannis Marcou' });
});

GET form
router.get('/form', function(req, res, next) {
  res.render('form', { title: 'Send me a message' });
});

// GET thank you
router.get('/thankyou', function(req, res, next) {
  res.render('thankyou', { title: 'Thank you'});
}) 

res.redirect('/site');

*/

module.exports = router;
