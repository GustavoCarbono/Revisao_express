const express = require('express')
const router = express.Router()

const exercicio = "<h1>Questão 6</h1><h2>( 3^(6) . 3^(-2) ) : 3^4 é igual a:</h2><p>a) 0</p><p>b) 1</p><p>c) 3^(-3)</p><p>d) 3^(-8)</p>"

router.get('/6', (req, res)=>{
    res.send(exercicio
        +'<a href="http://localhost:3000">voltar</a>')
})

module.exports = router