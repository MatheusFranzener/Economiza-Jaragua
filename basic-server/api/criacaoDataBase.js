database(`CREATE TABLE IF NOT EXISTS ADMINISTRADOR (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(45),
    SENHA varchar(100),
    TELEFONE int(11),
    EMAIL varchar(100)
    )`).then(result => {
    console.log('Tabela Administrador criada com sucesso');
}).catch(erro => {
    console.log('Tabela com erro na criação');
});

database(`CREATE TABLE IF NOT EXISTS USUARIO (
    ID_USUARIO INTEGER PRIMARY KEY AUTOINCREMENT,
    EMAIL varchar(100)
    )`).then(result => {
    console.log('Tabela Usuario criada com sucesso');
}).catch(erro => {
    console.log('Tabela Usuario com erro na criação');
});

database(`CREATE TABLE IF NOT EXISTS ENDERECO (
    CODIGO INTEGER PRIMARY KEY AUTOINCREMENT,
    UF_ESTADO char(2),
    NOME_CIDADE varchar(100),
    RUA varchar(100),
    BAIRRO varchar(50),
    NUMERO int(4),
    COMPLEMENTO varchar(150)
    )`).then(result => {
    console.log('Tabela Endereco criada com sucesso');
}).catch(erro => {
    console.log('Tabela Endereco com erro na criação');
});

database(`CREATE TABLE IF NOT EXISTS CATEGORIA (
    CODIGO INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(45),
    DESCRICAO varchar(100)
    )`).then(result => {
    console.log('Tabela Categoria criada com sucesso');
}).catch(erro => {
    console.log('Tabela Categoria com erro na criação');
});

database(`CREATE TABLE IF NOT EXISTS MERCADO (
    CNPJ INTEGER(14) PRIMARY KEY,
    NOME_MERCADO varchar(100),
    TELEFONE int(11),
    ID_ADMINISTRADOR int,
    CODIGO_ENDERECO int,
    FOREIGN KEY(ID_ADMINISTRADOR)
    REFERENCES ADMINISTRADOR(ID)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    FOREIGN KEY(CODIGO_ENDERECO)
    REFERENCES ENDERECO(CODIGO)
    ON DELETE CASCADE
    ON UPDATE CASCADE
    )`).then(result => {
    console.log('Tabela Mercado criada com sucesso');
}).catch(erro => {
    console.log('Tabela Mercado com erro na criação');
});

database(`CREATE TABLE IF NOT EXISTS PROMOCAO (
    CODIGO INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME_PRODUTO varchar(100),
    VALOR double,
    DATA_VALIDA date,
    DESCRICAO varchar(200),
    NOME_IMAGEM varchar(100),
    CNPJ_MERCADO int(14),
    CODIGO_CATEGORIA int,
    FOREIGN KEY(CNPJ_MERCADO)
    REFERENCES MERCADO(CNPJ)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    FOREIGN KEY(CODIGO_CATEGORIA)
    REFERENCES CATEGORIA(CODIGO)
    ON DELETE CASCADE
    ON UPDATE CASCADE
    )`).then(result => {
    console.log('Tabela Promocao criada com sucesso');
}).catch(erro => {
    console.log('Tabela Promocao com erro na criação');
});


