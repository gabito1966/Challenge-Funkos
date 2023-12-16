const express = require('express');
const {shop,item,addItem,cart,addToCart} = require('../controllers/shopController');
const router = express.Router();

router.get('/', shop);
router.get('/item/:id', item);
router.post('/item/:id/add', addItem);
router.get('/cart', cart);
router.post('/cart', addToCart);



module.exports = router;