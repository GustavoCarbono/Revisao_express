const express = require('express')
const router = express.Router()

const exercicio = "<h1>Questão 2</h1><h2>Sabendo que o valor de 5^(7) é 78 125, qual o resultado de 5^(8)?</h2><p>a) 156 250</p><p>b) 390 625</p><p>c) 234 375</p><p>d) 312 500</p>"

router.get('/2', (req, res)=>{
    res.send(exercicio
        +'<a href="http://localhost:3000">voltar</a>')
})

module.exports = router