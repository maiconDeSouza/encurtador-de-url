const router = require('express').Router()
const Controllers = require('../controllers')
const Middleware = require('../controllers/middleware')
const Redirect = require('../controllers/redirect')


router.get('/teste', Controllers.teste)

router.get('/:id?', Redirect)

router.post('/criar', Middleware.existenciaNomeDeUsuario, Controllers.criarUsuario)

router.post('/criar-abreviacao',
Middleware.usuarioValido, 
Middleware.pegarDadosUsuario,
Middleware.verificaAbreviacao, 
Controllers.cadastrarAbreviacao
)


module.exports = router