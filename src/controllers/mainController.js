module.exports = {
    home: (req, res) => {
        res.render('../views/index.ejs', {
            title: "Home | Funkoshop"
            
        });
    },
    contact: (req, res) => {
        res.render('../views/contact.ejs', {
            title: 'Contacto | Funkoshop'
            
        });
    },
    about: (req, res) => {
        res.render('../views/about.ejs', {
            title: 'Sobre Nosotros | Funkoshop'
            
        });
    },
    faqs: (req, res) => {
        res.render('../views/faqs.ejs', {
            title: 'Preguntas Frecuentes | Funkoshop'
            
        });
    },
}

