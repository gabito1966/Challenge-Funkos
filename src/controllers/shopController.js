const path = require('path');

const data = [
    {
        product_id: 1,
        licence_name: "Futbol",
        category_name: "Figuras coleccionables",
        product_name: "Kevin de Bruyne",
        product_description: "Figura coleccionable deportiva",
        product_price: 1599.99,
        dues: 12,
        product_sku: "DPT001001",
        img_front: "/img/deportes/Kevin-de-Bruyne-front.jpg",
        img_back: "/img/deportes/Kevin-de-Bruyne-front.jpg"
    },
    {
        product_id: 2,
        licence_name: "Futbol",
        category_name: "Figuras coleccionables",
        product_name: "Lionel Messi",
        product_description: "Figura coleccionable deportiva",
        product_price: 2799.99,
        dues: 6,
        product_sku: "DPT001002",
        img_front: "/img/deportes/Lionel-Messi-front.png",
        img_back: "/img/deportes/Lionel-Messi-box.png"
    },
    {
        product_id: 3,
        licence_name: "Futbol",
        category_name: "Figuras coleccionables",
        product_name: "Angel di Maria",
        product_description: "Figura coleccionable deportiva",
        product_price: 2599.99,
        dues: 6,
        product_sku: "DPT001003",
        img_front: "/img/deportes/Angel-di-Maria-front.jpg",
        img_back: "/img/deportes/Angel-di-Maria-box.jpg"
    },
    {
        product_id: 4,
        licence_name: "Tenis",
        category_name: "Figuras coleccionables",
        product_name: "Rafael Nadal",
        product_description: "Figura coleccionable deportiva",
        product_price: 3499.99,
        dues: 3,
        product_sku: "DPT001004",
        img_front: "/img/deportes/Rafael-Nadal-front.jpg",
        img_back: "/img/deportes/Rafael-Nadal-box.jpg"
    },
    {
        product_id: 5,
        licence_name: "Tenis",
        category_name: "Figuras coleccionables",
        product_name: "Roger Federer",
        product_description: "Figura coleccionable deportiva",
        product_price: 4899.99,
        dues: 12,
        product_sku: "DPT001005",
        img_front: "/img/deportes/Roger-Federer-front.jpg",
        img_back: "/img/deportes/Roger-Federer-box.jpg"
    },
    {
        product_id: 6,
        licence_name: "Tenis",
        category_name: "Figuras coleccionables",
        product_name: "Venus Williams",
        product_description: "Figura coleccionable deportiva",
        product_price: 2299.99,
        dues: 3,
        product_sku: "DPT001006",
        img_front: "/img/deportes/venus-williams-front.jpg",
        img_back: "/img/deportes/venus-williams-box.jpg"
    },
    {
        product_id: 7,
        licence_name: "Tenis",
        category_name: "Figuras coleccionables",
        product_name: "John Mc Enroe",
        product_description: "Figura coleccionable deportiva",
        product_price: 1399.99,
        dues: 12,
        product_sku: "DPT001007",
        img_front: "/img/deportes/John-McEnroe-front.jpg",
        img_back: "/img/deportes/John-McEnroe-box.jpg"
    },
    {
        product_id: 8,
        licence_name: "Formula 1",
        category_name: "Figuras coleccionables",
        product_name: "Checo Perez",
        product_description: "Figura coleccionable deportiva",
        product_price: 1799.99,
        dues: 10,
        product_sku: "DPT001008",
        img_front: "/img/deportes/checo-perez-front.png",
        img_back: "/img/deportes/checo-perez-box.png"
    },
    {
        product_id: 9,
        licence_name: "Formula 1",
        category_name: "Figuras coleccionables",
        product_name: "Max Verstappen",
        product_description: "Figura coleccionable deportiva",
        product_price: 3199.99,
        dues: 6,
        product_sku: "DPT001009",
        img_front: "/img/deportes/Max-Verstappen-front.jpg",
        img_back: "/img/deportes/Max-Verstappen-box.jpg"
    }
];

const shopControllers = {
    shop: (req, res) => {
        0
        res.render( '../views/shop/shop.ejs', {
            title: 'Shop | Funkoshop',
            data
            });
        },
    item: (req, res) => {
        const itemId = req.params.id;
        const item = data.find(item => item.product_id == itemId);
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

module.exports = shopControllers;