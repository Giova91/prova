var express = require('express');
var faq = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('faq');
});

module.exports = router;