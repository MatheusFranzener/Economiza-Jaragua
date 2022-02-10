database(`CREATE TABLE IF NOT EXISTS TESTE (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(30),
    NUMERO int
    )`).then(result => {
    console.log('Tabela criada com sucesso');
}).catch(erro => {
    console.log('Tabela com erro na criação');
});

database(`CREATE TABLE IF NOT EXISTS USER (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(30),
    SENHA varchar(30),
    TELEFONE char(11),
    EMAIL varchar(100)
    )`).then(result => {
    console.log('Tabela User criada com sucesso');
}).catch(erro => {
    console.log('Tabela com erro na criação');
});
