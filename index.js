const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.get('/soma', (req, res) => {
    const body = req.body
    console.log(body)

    const soma = body.n1 + body.n2
    res.send(`O resultado da Soma é: ${soma}`)
})

app.listen(3333, () => console.log('Servidor aberto!'))