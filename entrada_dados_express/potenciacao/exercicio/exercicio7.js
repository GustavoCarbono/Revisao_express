const express = require('express')
const router = express.Router()

const exercicio = "<h1>Questão 7</h1><h2>Qual é o valor de 3^(3)?</h2><p>a) 6</p><p>b) 9</p><p>c) 18</p><p>d) 27</p><p>e) 81</p>"

router.get('/7', (req, res)=>{
    res.send(exercicio
        +'<a href="http://localhost:3000">voltar</a>')
})

module.exports = router