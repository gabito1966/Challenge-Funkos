const userCredentials = {
    email: 'gabriel@gmail.com',
    password: 'gabito1966'
}

module.exports = {
    loginView: (req, res) => res.render('../views/auth/login.ejs', {
        title: 'Login | Funkoshop'
    }),
    loginUser: (req, res) => {
        const {email, password} = req.body;
        const emailValidation = userCredentials.email == email;
        const passwordValidation = userCredentials.password == password;
        
        req.session.isLogged = emailValidation && passwordValidation ? true : false;

        if (req.session.isLogged) {
            res.locals.isLogged = true;
            return res.redirect('/admin');
        }
        return res.status(401).send('Credenciales inválidas');
    },
    registerView: (req, res) => res.render('../views/auth/register.ejs', {
        title: 'Register | Funkoshop',
    }),
    
    registerUser: (req, res) => res.send(" Register route that recieve the data when"),
    logoutUser: (req, res) => {
        req.session.isLogged = false;
        res.send("Sesion finalizada con exito")
    },
}
