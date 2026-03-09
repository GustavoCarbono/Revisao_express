const express = require('express')
const router = express.Router()

const propriedades = ["<h2>Multiplicação de potências de mesma base</h2><p>am . an = am + n</p><p>Ex: 22 . 23 = 22+3 = 25 = 32</p>",
    "<h2>Divisão de potências de mesma base</h2><p>am : an = am – n</p><p>Ex: 24 : 22 = 24-2 = 22 = 4</p>",
    "<h2>Potência de potência</h2><p>(am)n = am.n</p><p>(32)5 = 32.5 = 310 = 59 049</p>",
    "<h2>Potência de produto</h2><p>(a . b)m = am . bm</p><p>(2 . 3)2 = 22 . 32 = 4 . 9 = 36</p>",
    "<h2>Potência de expoente negativo</h2><p>a⁻ⁿ=1/aⁿ</p><p>Ex: (2)⁻⁴ = (1/2)⁴ = 1/16</p>"
]

router.get('/propriedades', (req, res)=>{
    res.send(propriedades[0]+propriedades[1]+propriedades[2]+propriedades[3]+propriedades[4]
        +'<a href="http://localhost:3000">voltar</a>')
})

module.exports = router