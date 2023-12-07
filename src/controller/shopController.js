const shopControllers = {
    shop: (req, res) => res.send(" Route for Shop View"),
    itemGet: (req, res) => res.send(`Route for find and retrieve a product from the id: ${req.params.id}`),
    itemPost: (req, res) => res.send('Route for add the current item to the shop cart'),
    cartGet: (req, res) => res.send('Route for Cart View'),
    cartPost: (req, res) => res.send('Route for got to checkout page'),
}

module.exports = shopControllers;