const path = require('path');
const { getAll, getOne, create } = require('../models/product.model');

module.exports = {
    admin: async (req, res) => { 

        const data = await getAll(); 

        res.render(path.resolve(__dirname, '../views/admin/admin.ejs'), {
                title: 'Admin | Funkoshop',
                data
            })
        
        },
    createView: (req, res) => res.render(path.resolve(__dirname, '../views/admin/create.ejs'), {
            title: 'Create ITEM | Admin Funkoshop'
        }),

    createItem: async (req, res) => {

        const product_schema = {
            product_name: req.body.name,
            product_description: req.body.description,
            price: Number(req.body.price),
            stock: Number(req.body.stock),
            discount: Number(req.body.discount),
            sku: req.body.sku,
            dues: Number(req.body.dues),
            image_front: '/img/products/'+ req.files[0].filename,
            image_back: '/img/products/'+ req.files[1].filename,
            category_id: Number(req.body.category),
            licence_id: Number(req.body.licence)
        }
            
        await create([Object.values(product_schema)]);

        res.redirect('/admin');
    },

    editView: async (req, res) => {
        const { id } = req.params;
        const [product] = await getOne({product_id : id});

        res.render('../views/admin/edit.ejs', {
            title: 'Edit Product | Admin Funkoshop',
            product
        })
    },
    editItem: (req, res) => res.send(" Route for Admin Edit ID PUT View"),
        
    deleteItem: (req, res) =>{
        const { id }= req.params;
        res.send('Queres borrar el item ' + id)
    }
};


