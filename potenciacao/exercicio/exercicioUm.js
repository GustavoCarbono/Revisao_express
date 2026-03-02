const express = require('express')
const router = express.Router()

const exercicio = "<h1>Questão 1</h1><h2>Determine o valor de cada uma das potências abaixo</h2><p>a) 25^(1)</p><p>b) 150^(0)</p><p>c) (7/9)^(-2)</p>"

router.get('/1', (req, res)=>{
    res.send(exercicio
        +'<a href="http://localhost:3000">voltar</a>')
})

module.exports = router