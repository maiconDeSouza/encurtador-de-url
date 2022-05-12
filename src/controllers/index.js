const { v4 } = require('uuid')

const {usuarios, abreviacoes} = require('../db')

function teste(req, res){
    res.status(200).json({
        menssage: 'Rota Teste Funcionando',
        usuarios
    })
}

function criarUsuario(req, res){
    const { nome, nomeDeUsuario } = req.body

    if(nome && nomeDeUsuario){
        const usuario = {
            id: v4(),
            nome, 
            nomeDeUsuario, 
            abreviacao:[]
        }
        usuarios.push(usuario)

        return res.status(201).json({
            mensagem: "Usuário Criado com Sucesso",
            usuario
        })
    }

    res.status(404).json({
        mensagem: "Nome ou Nome de Usuário não informados"
    })
}

function cadastrarAbreviacao(req, res){
    const usuario = req.usuario
    const { url, abreviacao } = req.body

    usuario.abreviacao.push({
        url,
        abreviacao
    })

    abreviacoes.push({
        url,
        abreviacao
    })

    res.status(201).json({
        menssagem: "Abreviação Cadastrada com Sucesso!",
        abreviacao: usuario.abreviacao
    })
}


module.exports = {
    teste,
    criarUsuario,
    cadastrarAbreviacao
}