const express = require('express')

const propriedade_router = require('./potenciacao/propriedades.js')

const app = express()

app.use(express.urlencoded({extended:true}))

app.use('/potenciacao', propriedade_router)
var exercicio = ''
for(var i=1; i<11; i++) {
    exercicio += `<p><a href="http://localhost:3000/potenciacao/exercicio/${i}">Exercício ${i}</a></p>`
}

var exercicio_vestibular = ''
for(var i=1; i<6; i++) {
    exercicio_vestibular += `<p><a href="http://localhost:3000/potenciacao/exercicio_vestibular/${i}">Exercício Vestibular ${i}</a></p>`
}

app.get("/", (req, res) => {
    res.send('<a href="http://localhost:3000/potenciacao/propriedades">Propriedades</a>'
        + exercicio + exercicio_vestibular
    )
})


app.listen(3000, ()=>{console.log("operando na porta 3000")})