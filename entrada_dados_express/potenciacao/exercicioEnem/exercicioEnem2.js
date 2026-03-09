const express = require('express')
const router = express.Router()

const exercicio = "<h1>Exercício 2</h1><h2>A gripe é uma infecção respiratória aguda de curta duração causada pelo vírus influenza. Ao entrar no nosso organismo pelo nariz. esse vírus multiplica-se. disseminando-se para a garganta e demais partes das vias respiratórias, incluindo os pulmões. O vírus influenza é uma partícula esférica que tem um diâmetro interno de 0,00011 mm. Em notação científica, o diâmetro interno do vírus influenza, em mm, é "
+"</h2><p>a) 1,1 x 10^(-1)</p><p>b) 1,1 x 10^(-2)</p><p>c) 1,1 x 10^(-3)</p><p>d) 1,1 x 10^(-4)</p><p>e) 1,1 x 10^(-5)</p>"

router.get('/2', (req, res)=>{
    res.send(exercicio
        +'<a href="http://localhost:3000">voltar</a>')
})

module.exports = router