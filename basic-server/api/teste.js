inserirRota('/teste_busca', (dados, resposta) => {
    console.log(dados);
    database('SELECT * FROM TESTE').then(result => {
        resposta({ resposta: result });
    }).catch(erro => {
        resposta({ resposta: erro });
    });
});

inserirRota('/teste_criar_tabela', (dados, resposta) => {
    console.log(dados);
    
});

inserirRota('/teste_inserir_dados', (dados, resposta) => {
    console.log(dados);
    database(`INSERT INTO TESTE (NOME, NUMERO)
                VALUES ('NOME', 1)`).then(result => {
        resposta({ resposta: 'REGISTRO CRIADO' });
    }).catch(erro => {
        resposta({ resposta: erro });
    });
});


database(`CREATE TABLE IF NOT EXISTS TESTE (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(30),
    NUMERO int
    )`).then(result => {
    console.log('Tabela criada com sucesso');
}).catch(erro => {
    console.log('Tabela com erro na criação');
});




