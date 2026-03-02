const express = require('express')
const router = express.Router()

const exercicio = "<h1>Questão 5</h1><h2>O valor da expressão 20x^(3) + 2x^(2)y^(5), para x = - 4 e y = 2 é:</h2><p>a) 256</p><p>b) - 400</p><p>c) 400</p><p>d) - 256</p>"

router.get('/5', (req, res)=>{
    res.send(exercicio
        +'<a href="http://localhost:3000">voltar</a>')
})

module.exports = router