const path = require('path');
const { getAll, getOne } = require('../models/product.model');


module.exports = {
    shop: async (req, res) => {
        const data = await getAll();
        res.render(path.resolve(__dirname, '../views/shop/shop.ejs'), {
            title: 'Shop | Funkoshop',
            data
            });
        },

    item: async (req, res) => {
        const itemId = req.params.id;
        const [item] = await getOne({product_id: itemId});
        res.render('../views/shop/item.ejs', {
            title: 'Item | Funkoshop',
            item
        });
    },
    addItem: (req, res) => res.send('Route for add the current item to the shop cart'),
    cart: (req, res) => {
        res.render('../views/shop/cart.ejs', {
                title: 'Cart | Funkoshop'
        });
    },
    addToCart: (req, res) => res.send('Route for got to checkout page'),
}
