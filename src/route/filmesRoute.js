const express = require ('express')
const router = express.Router()
const controller = require('../controller/filmesController')

router.get('/', controller.getFilmes)
router.get('/:diretores', controller.getFiltroDiretor)
router.get('/genero', controller.getFiltroGenero)
//router.post('/genero', controller.insereGenero) add genero
//router.post('/filmeNovo' controller.insereFilme) add filme

module.exports = router