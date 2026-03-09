const express = require('express')
const router = express.Router()

const exercicio = "<h1>Exercício 1</h1><h2>(Enem 2017) Uma das principais provas de velocidade do atletismo é a prova dos 400 metros rasos. No Campeonato Mundial de Sevilha, em 1999, o atleta Michael Johnson venceu essa prova, com a marca de 43,18 segundos."
+"Esse tempo, em segundo, escrito em notação científica é</h2><p>a) 0,4318 x 10^(2)</p><p>b) 4,318 x 10^(1)</p><p>c) 43,18 x 10^(0)</p><p>d) 431,8 x 10^(-1)</p><p>e) 4 318 x 10^(-2)</p>"

router.get('/1', (req, res)=>{
    res.send(exercicio
        +'<a href="http://localhost:3000">voltar</a>')
})

module.exports = router