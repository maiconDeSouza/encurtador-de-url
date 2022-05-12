const  express = require('express')
const app = express()
const router = require('./routes')

app.use(express.json())


app.use(router)

app.use((req, res)=>{
    res.status(404).json({mensage:"Página não encontarda"})
})
const port = 1992
app.listen(port, (error) =>{
    error ? console.log(error) : console.log(`Servidor rodando na porta ${port}`) 
})