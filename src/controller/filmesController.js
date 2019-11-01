const filmes = require ('../model/filmes.json')

exports.getFilmes = (req,res) => {
    console.log(req.url)
    res.status(200).send(filmes)
}

exports.getFiltroDiretor = (req,res) => {
    const {director} = req.params
    const diretoresFiltro = filmes.filter(item => item.director == diretores)
    res.status(200).send(diretoresFiltro)
}


   

exports.getFiltroGenero = (req,res) => {

}

