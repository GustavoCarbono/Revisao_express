const express = require('express')
const router = express.Router()

const exercicio = "<h1>Exercício 4</h1><h2>O valor real de x que satisfaz a equação 20^(2x) - 2^(2x+1) = 40^(x) é:"
+"</h2><p>a) x = log(2) 10</p><p>b) x = log(10) 2</p><p>c) x = log(20) 4</p><p>d) x = log(4) 20</p><p>e) x = log(40) 2</p>"

router.get('/4', (req, res)=>{
    res.send(exercicio
        +'<a href="http://localhost:3000">voltar</a>')
})

module.exports = router