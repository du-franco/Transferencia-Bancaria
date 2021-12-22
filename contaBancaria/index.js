require('./config/conexao')
const express = require('express')
const app = express()
const porta = 3000
const cors = require('cors')

app.use(express.json())
app.use(cors())

const rotasTarefas = require('./rotas')

app.use('/tarefas', rotasTarefas)

app.listen(porta, () => {
    console.log("Servidor rodando...")
})