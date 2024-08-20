var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '我的-React-接口测试' });
});

router.get('/api/shop', function(req, res, next) {
  const data = require('./../data/shop.json');
  res.json(data);
});

router.get('/api/todos', function(req, res, next) {
  const data = require('./../data/todo.json');
  res.json(data);
});

module.exports = router;
