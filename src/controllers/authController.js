const path = require('path');

const credentials = {
    email: 'gabriel@gmail.com',
    password: 'gabriel1234'
}

module.exports = {
    login: (req, res) => res.render(path.resolve(__dirname, '../views/auth/login.ejs'), {
        title: 'Login | Funkoshop'
    }),
    doLogin: (req, res) => {
        const {email, password} = req.body;
        const validateEmail = credentials.email == email;
        const validatePassword = credentials.password == password;
        
        req.session.isLogged = validateEmail && validatePassword ? true : false;

        if (req.session.isLogged) {
            res.locals.isLogged = true;
            return res.redirect('/admin');
        }
        return res.status(401).send('Credenciales inválidas');
    },
    register: (req, res) => res.render(path.resolve(__dirname,'../views/auth/register.ejs'), {
        title: 'Register | Funkoshop',
    }),
    
    doRegister: (req, res) => res.send(" Register route that recieve the data when"),
    logout: (req, res) => {
        req.session.isLogged = false;
        res.send("Sesion finalizada con exito")
    },
}
