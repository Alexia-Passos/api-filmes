const express = require ('express')
const app = express ()

const index = require('./route/index')
const filmes = require('./route/filmesRoute')


app.use(express.json());

app.all('*', function(req,res,next){
    console.log ('Foi feita uma requisiçao')
    next ()
})

app.use('/', index)
app.use('/filmes', filmes)


module.exports = app