# PROYECTO INTEGRADOR CODO A CODO DICIEMBRE2023

### Autor: GABRIEL JORGE GARCIA

## 🖥️🔨Tecnologías y Herramientas

- FIGMA
- HTML
- CSS (Bootstrap es opcional)
- GIT y GITHUB
- Node JS + Express JS
- NPM
- Arquitectura MVC
- Template Engines
- MySQL y Gestores de BBDD
- Sequelize


## 👁️Estructura del sitio Full Stack:
```plaintext

/proyecto
├── index.js
├── /config
│   └── conn.js (conexión a base de datos)
├── /controllers
│   ├── /adminControllers.js
│   ├── /authControllers.js
│   ├── /cartControllers.js
│   ├── /mainControllers.js
│   └── /shopControllers.js
├── /middlewares
│   ├── /login.js
│   ├── /uploadFiles.js
│   └── /validator.js
├── /models
│   ├── /categoryModel.js
│   ├── /itemModel.js
│   └── /licenceModel.js
├── /routes
│   ├── /adminRoutes.js
│   ├── /authRoutes.js
│   ├── /mainRoutes.js
│   └── /shopRoutes.js
├── /services
│   ├── /cartServices.js
│   ├── /categoryServices.js
│   ├── /itemServices.js
│   └── /licenceServices.js
├── /utils
│   └── /session.js
└── /views
    ├── /contact.ejs
    ├── /home.ejs
    ├── /admin
    │   ├── /admin.ejs
    │   ├── /create.ejs
    │   └── /edit.ejs
    ├── /auth
    │   ├── /login.ejs
    │   └── /register.ejs
    ├── /partials
    │   ├── /card.ejs
    │   ├── /footer.ejs
    │   ├── /header.ejs
    │   └── /sliders.ejs
    └── /shop
        ├── /cart.ejs
        ├── /item.ejs
        └── /shop.ejs
```
