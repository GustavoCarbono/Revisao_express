const express = require('express')
const router = express.Router()

const exercicio = "<h1>Questão 3</h1><h2>As potências (-2)^(4) e -2^(4) são iguais ou diferentes? E qual o resultado?</h2>"

router.get('/3', (req, res)=>{
    res.send(exercicio
        +'<a href="http://localhost:3000">voltar</a>')
})

module.exports = router