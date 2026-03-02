const express = require('express')
const router = express.Router()

const exercicio = "<h1>Questão 9</h1><h2>Sabendo que a^(2) · a^(3) = a^(x), então o valor de x é:</h2><p>a) 1</p><p>b) 2</p><p>c) 3</p><p>d) 5</p><p>e) 6</p>"

router.get('/9', (req, res)=>{
    res.send(exercicio
        +'<a href="http://localhost:3000">voltar</a>')
})

module.exports = router