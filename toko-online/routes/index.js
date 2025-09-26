var express = require('express');
var router = express.Router();
var products = require('../data/products.json');

/* GET home page. */
router.get('/', function (req, res, next) {
  const query = req.query.q ? req.query.q.toLowerCase() : '';
  let filteredProducts = products;
  let isSearch = false;
  if (query) {
    filteredProducts = products.filter(p =>
      p.name.toLowerCase().includes(query)
    );
    isSearch = true;
  }
  res.render('index', {
    title: isSearch ? 'Hasil Pencarian' : 'Toko Online Sederhana',
    products: filteredProducts,
    isSearch: isSearch,
    searchQuery: query
  });
});

router.get('/search', function (req, res, next) {
  const query = req.query.q ? req.query.q.toLowerCase() : '';
  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.description.toLowerCase().includes(query)
  );
  res.render('index', {
    title: 'Hasil Pencarian',
    products: filteredProducts,
    isSearch: true,
    searchQuery: query
  });
});

module.exports = router;
