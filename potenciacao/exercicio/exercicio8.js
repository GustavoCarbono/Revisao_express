const express = require('express')
const router = express.Router()

const exercicio = "<h1>Questão 8</h1><h2>Qual é o valor de (-2)^(3):</h2><p>a) -6</p><p>b) 6</p><p>c) 8</p><p>d) -8</p><p>e) 4</p>"

router.get('/8', (req, res)=>{
    res.send(exercicio
        +'<a href="http://localhost:3000">voltar</a>')
})

module.exports = router