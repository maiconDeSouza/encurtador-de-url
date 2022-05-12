const {usuarios, abreviacoes} = require('../db')

function existenciaNomeDeUsuario(req, res, next){
    const { nomeDeUsuario } = req.body

    const validador = usuarios.some(usuario => usuario.nomeDeUsuario === nomeDeUsuario)

    if(validador){
        return res.status(200).json({
            menssagem: `Nome de Usuário ${nomeDeUsuario} já está sendo usado!`
        })
    }

    next()
    
}

function usuarioValido(req, res, next){
    const { nomedeusuario: nomeDeUsuario } = req.headers

    const validador = usuarios.some(usuario => usuario.nomeDeUsuario === nomeDeUsuario)

    if(validador){
        return next()
    }

    res.status(404).json({
        menssagem: `Usuário ${nomeDeUsuario} não encontrado!`
    })
}

function pegarDadosUsuario(req, res, next){
    const { nomedeusuario: nomeDeUsuario } = req.headers
    
    const usuario = usuarios.find(usuario => usuario.nomeDeUsuario === nomeDeUsuario)
    
    req.usuario = usuario

    next()
}

function verificaAbreviacao(req, res, next){
    const { abreviacao } = req.body

    const validador = abreviacoes.some(abre => abre.abreviacao === abreviacao)

    if(validador){
       return res.status(200).json({
            menssagem: `A Abreviação ${abreviacao} já está sendo usada`
        })
    }

    next()
}

module.exports = {
    existenciaNomeDeUsuario,
    usuarioValido,
    pegarDadosUsuario,
    verificaAbreviacao
}