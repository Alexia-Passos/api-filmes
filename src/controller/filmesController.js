const filmes = require ('../model/filmes.json')

exports.filmes = (req,res) => {
    console.log(req.url)
    res.status(200).send(filmes)
}

exports.filtroDiretor = (req,res) => {
    const id = req.params.id
    console.log(id)
    res.status(200).send(filmes.find(item=>item.id ==id))
}

