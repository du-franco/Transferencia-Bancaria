const rotas = require('express').Router()

const conexao = require('./config/conexao')

rotas.get('/', (req, res) => {
    let sql = 'select * from tb_tarefas'
    conexao.query(sql, (erro, rows, fields) => {
        if(erro)throw erro
        res.json(rows)
    })
})

rotas.get('/:id', (req, res) => {
    const {id} = req.params
    let sql = 'select * from tb_tarefas where id_transferencia = ?'
    conexao.query(sql, [id], (erro, rows, fields) => {
        if(erro)throw erro
        res.json(rows[0])
    })
})

rotas.delete('/:id', (req, res) => {
    const {id} = req.params
    let sql = `delete from tb_tarefas where id_transferencia = ${id}`
    conexao.query(sql, (erro, rows, fields) => {
        if(erro)throw erro
        res.json({status:'Transferência excluida com sucesso'})
    })
})

rotas.post('/', (req, res) => {
    const {nome, valor, contaCliente} = req.body
    let sql = `insert into tb_tarefas(nome,valor,contaCliente) values ('${nome}','${valor}','${contaCliente}')`
    conexao.query(sql, (erro, rows, fields) => {
        if(erro)throw erro
        res.json({status:"Tarefa incluida com sucesso"})
    })
})

rotas.put('/:id', (req, res) => {
    const {id} = req.params
    const {nome,valor,contaCliente} = req.body
    let sql = `update tb_tarefas set
                nome = '${nome}',
                valor = '${valor}',
                contaCliente = '${contaCliente}'
                where id_transferencia = '${id}'`
    conexao.query(sql, (erro, rows, fields) => {
        if(erro)throw erro
        res.json({status:"Tarefa editada com sucesso"})
    })            
})

module.exports = rotas
