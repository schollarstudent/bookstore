var express = require('express');
var router = express.Router();
const bookController = require('../controllers/bookController.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
module.exports = router;

router.get('/books',bookController.viewAll);