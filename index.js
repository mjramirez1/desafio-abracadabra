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

app.use(express.static('assets')) // carpeta assets publica?
app.get('/', (req, res) => {
    res.sendFile(__dirname + 'index.html')
})

app.get('/abracadabra/usuarios', (req, res) => {
    res.send(usuarios)
}
)

app.use('/abracadabra/juego/:usuario', (req, res, next) => {
    const { usuario } = req.params 
    usuario === 


    res.sendFile(__dirname + '/usuarios.json')
}
)

