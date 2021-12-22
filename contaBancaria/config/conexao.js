const mysql = require('mysql')
const conexao = mysql.createConnection({
    hots: 'localhost',
    user: 'root',
    password: 'Eed240818&',
    port: 3306,
    database: 'db_transferencia'
})

conexao.connect((erro) => {
    if(erro)throw erro
    console.log('Estamos conectados com a base de dados')
})

module.exports = conexao