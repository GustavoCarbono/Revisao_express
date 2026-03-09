const express = require('express')
const router = express.Router()

const exercicio = "<h1>Exercício 5</h1><h2>O nosso planeta Terra perdeu 28 trilhões de toneladas de gelo em pouco mais de duas décadas. A perda de 28 trilhões de toneladas de gelo nos últimos 23 anos se reflete na situação da calota da Groenlândia, a segunda maior reserva de água doce da terra: não há mais como parar seu derretimento. A quantidade de quilogramas de gelo perdidos nos últimos 23 anos, em notação científica, de acordo com o texto, é"
+"</h2><p>a) 2,8 ∙ 10^(12)</p><p>b) 2,8 ∙ 10^(13)</p><p>c) 2,8 ∙ 10^(15)</p><p>d) 2,8 ∙ 10^(16)</p><p>e) 2,8 ∙ 10^(18)</p>"

router.get('/5', (req, res)=>{
    res.send(exercicio
        +'<a href="http://localhost:3000">voltar</a>')
})

module.exports = router