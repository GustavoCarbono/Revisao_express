const express = require('express')
const router = express.Router()

const exercicio = "<h1>Questão 4</h1><h2>Em um sítio há 12 árvores. Cada árvore possui 12 galhos e em cada galho tem 12 maçãs. Quantas maçãs existem no sítio?</h2><p>a) 144</p><p>b) 1224</p><p>c) 1564</p><p>d) 1728</p>"

router.get('/4', (req, res)=>{
    res.send(exercicio
        +'<a href="http://localhost:3000">voltar</a>')
})

module.exports = router