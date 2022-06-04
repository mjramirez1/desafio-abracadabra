const { application } = require('express')
const express = require('express')
const app = express()

const usuarios = {
    usuarios: [
        "Lily",
        "Luis",
        "Juan",
        "Pedro",
        "Carlos",
        "Michi"
    ]
}

app.listen(3000, () => {
    console.log('El servidor está inicializado en el puerto 3000')
})

// carpeta assets publica
app.use(express.static('assets'))
app.get('/', (req, res) => {
    res.sendFile(__dirname + 'index.html')
})
// recibe usuarios
app.get('/abracadabra/usuarios', (req, res) => {
    res.send(usuarios)
})
// Filra por usuario del JSON
app.use('/abracadabra/juego/:usuario', (req, res, next) => {
    const usuario = req.params.usuario
    const usuariosRegistrados = usuarios.usuarios
    const findUsuarios = usuariosRegistrados.find((user) => user === usuario)
    if (findUsuarios) {
        next()
    } else {
        res.redirect('/who.jpeg')
    }
})
app.get('/abracadabra/juego/:usuario', (req, res, next) => {
    res.redirect('/')
})
// Recibe número random
app.get('/abracadabra/conejo/:n', (req, res) => {
    const numero = Math.floor(Math.random() * 4) + 1;
    const n = Number.parseInt(req.params.n)
    if (n === numero) {
        res.redirect('/conejito.jpg')
    } else {
        res.redirect('/voldemort.jpg')
    }
})
app.get('/voldemort.jpg', (req, res) => {
    res.redirect('/')
})
//ruta generica
app.get('*', (req, res) => {
    res.send('<center><h1>Esta página no existe</h1> </center>')
})
