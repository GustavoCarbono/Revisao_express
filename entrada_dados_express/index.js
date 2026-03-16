const express = require('express')
const path = require('path')
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
})

app.get('/:n1/:n2', (req, res) => {
    res.send(`<p>${req.params.n1*req.params.n2}</p>`+'<a href="http://127.0.0.1:3000">voltar</a>')
})
app.listen(3000, ()=>{console.log("operando na porta 3000")})