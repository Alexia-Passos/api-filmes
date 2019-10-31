const express = require ('express')
const router = express.Router()
const controller = require('../controller/filmesController')

router.get('/', controller.filmes)
router.get('/:id/diretor', controller.filtroDiretor)
router.get('/genero', controller.filtroGenero)
//router.post('/genero', controller.insereGenero) add genero
//router.post('/filmeNovo' controller.insereFilme) add filme

modules.exports = router