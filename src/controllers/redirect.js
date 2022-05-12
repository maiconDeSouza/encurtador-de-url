const {usuarios, abreviacoes} = require('../db')


function redirect(req, res){
    const { id:rota } = req.params

    const caminho = abreviacoes.find(abre => abre.abreviacao === rota)
   
    if(caminho){
        res.redirect(caminho.url)
    }
}

module.exports = redirect