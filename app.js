const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { initSession } = require('./src/middlewares/session');

/* Routes imports*/
const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');

const PORT = 3000;

// Templates Engines
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./src/views"));

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

//Crear sesion de usuario

app.use(initSession());



// Rutas
app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);

app.listen(PORT, () => console.log(`Servidor corriendo en ⚡ http://localhost:${PORT}`));