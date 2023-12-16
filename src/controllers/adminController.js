module.exports = {
    adminView: async (req, res) => {
      //  const {data} = await ItemService.getAllItems();
        res.render( '../views/admin/admin.ejs', 
            {
                title: 'List of Products | Admin Funkoshop',
                items: data
            });
        
        },
        createView: async (req, res) => { 
          //  const{data:categories } = await CategoryService.gatAllItemsCategories();
          //  const { data: licences } = await LicenceService.gatAllItemsLicences();
            res.render('../views/admin/create.ejs', {
                title: 'Create Product | Admin Funkoshop',
                categories,
                licences
            });
        },
        createItem: async (req, res) => {
            res.send(" Route for Admin Create POST View")
        },
        editView: async (req, res) => {
            res.render('../views/admin/edit.ejs', {
                title: 'Edit Product | Admin Funkoshop',
                
            });
        },
        editItem: (req, res) => res.send(" Route for Admin Edit ID PUT View"),
        deleteItem: (req, res) => res.send(" Route for Admin View"),
};
