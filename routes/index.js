var express = require('express');
var router = express.Router();

const images = [
  {name: "laptop", url:"../public/images/1.jpg"}
]
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/images', function (req, res, next) {
res.render('index', {img:'../public/images/'})
})

module.exports = router;
