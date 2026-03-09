const express = require('express')
const router = express.Router()

const exercicio = "<h1>Questão 10</h1><h2>Um vírus dobra de quantidade a cada hora. Se inicialmente há 1 célula infectada, quantas células estarão infectadas após 6 horas?</h2><p>a) 6</p><p>b) 32</p><p>c) 36</p><p>d) 48</p><p>e) 64</p>"

router.get('/10', (req, res)=>{
    res.send(exercicio
        +'<a href="http://localhost:3000">voltar</a>')
})

module.exports = router