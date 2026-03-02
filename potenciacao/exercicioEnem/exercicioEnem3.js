const express = require('express')
const router = express.Router()

const exercicio = "<h1>Exercício 3</h1><h2>Quando algo varia com o expoente, usa-se o logaritmo para expressar tal variação. Sabe-se, por exemplo, que a força física envolvida em certos sons (para ser mais preciso, a energia) é uma potência cuja base é 10^(1) . Assim, enquanto o leve rumorejar das folhas é da ordem de 10^(1) , uma conversa em voz alta é algo em torno de 10^(6,5) e um martelo sobre uma lâmina de aço chega a 10^(11)."
+"Tomando como referência os dados do texto, é correto afirmar que o som de um martelo sobre uma lâmina de aço, em comparação ao som do rumorejar das folhas, é"
+"</h2><p>a) 10 vezes maior.</p><p>b) 10^(10) vezes maior.</p><p>c) 10^(11) vezes maior.</p><p>d) 10^(12) vezes maior.</p><p>e) 10^(6,5) vezes maior.</p>"

router.get('/3', (req, res)=>{
    res.send(exercicio
        +'<a href="http://localhost:3000">voltar</a>')
})

module.exports = router