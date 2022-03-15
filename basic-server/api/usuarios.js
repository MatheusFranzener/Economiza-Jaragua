inserirRota('/buscar_usuario',
    function (dados, resposta) {
        console.log(dados);
        database('SELECT * FROM ADMINISTRADOR').then(result => {
            resposta( result );
        }).catch(erro => {
            resposta({ erro: "Erro ao buscar os usuários!" });
        });
    });

inserirRota('/login',
    function (dados, resposta) {
        console.log(dados);

        database(`SELECT * FROM ADMINISTRADOR WHERE NOME = "${dados.nome}" AND SENHA = "${dados.senha}" LIMIT 1`)
        .then(result => {
            console.log('result:',result);
            resposta({ user: result[0] });
        }).catch(erro => {
            resposta({ erro: "Erro ao buscar os usuários!" });
        });
     });

inserirRota('/criar_usuario',
function name(dados,resposta){
    console.log(dados);

    if(!dados.nome){
        return resposta({erro: 'É necessário preencher o nome'})
    }

    if(!dados.senha){
        return resposta({erro: 'É necessário preencher a senha'})
    }

    if(!dados.email){
        return resposta({erro: 'É necessário preencher o email'})
    }

    if(!dados.telefone){
        return resposta({erro: 'É necessário preencher o telefone'})
    }

    database(`INSERT INTO ADMINISTRADOR 
    (
        NOME,
        SENHA,
        TELEFONE,
        EMAIL
        ) 
        VALUES (
            "${dados.nome}",
            "${dados.senha}",
            "${dados.telefone}",
            "${dados.email}"
        )`)
        .then(result => {
        console.log('Usuário inserido com sucesso');
        resposta({message: 'Usuário inserido com sucesso!'})
    }).catch(erro => {
        console.log('Erro ao inserir usuário');
        resposta({erro: 'Erro ao inserir usuário!'})
    });
}
)


inserirRota('/cadastrar_mercado',
function(dados,resposta){
    console.log(dados);

    database(`INSERT INTO MERCADO 
    (
        CNPJ,
        NOME_MERCADO,
        TELEFONE
        ) 
        VALUES (
            "${dados.cnpj}",
            "${dados.nome_mercado}",
            "${dados.telefone}"
        )`)

        .then(result => {
        console.log('Mercado cadastrado com sucesso');
        resposta({message: 'Mercado cadastrado com sucesso!'})
    }).catch(erro => {
        console.log('Erro ao cadastrar mercado');
        resposta({erro: 'Erro ao cadastrar mercado'})
    })
})

inserirRota('/cadastrar_endereco',
function(dados,resposta){
    console.log(dados);

    database(`INSERT INTO ENDERECO 
    (
        UF_ESTADO,
        NOME_CIDADE,
        RUA,
        BAIRRO,
        NUMERO,
        COMPLEMENTO
        ) 
        VALUES (
            "${dados.uf_estado}",
            "${dados.nome_cidade}",
            "${dados.rua}",
            "${dados.bairro}",
            "${dados.numero}",
            "${dados.complemento}"
            
        )`)

        .then(result => {
        console.log('Endereco cadastrado com sucesso');
        resposta({message: 'Endereco cadastrado com sucesso!'})
    }).catch(erro => {
        console.log('Erro ao cadastrar Endereco');
        resposta({erro: 'Erro ao cadastrar Endereco'})
    })
})

inserirRota('/cadastrar_promocao',
function(dados,resposta){
    console.log(dados);

    database(`INSERT INTO PROMOCAO 
    (
        NOME_PRODUTO,
        VALOR,
        DATA_VALIDA,
        DESCRICAO,
        NOME_IMAGEM
        ) 
        VALUES (
            "${dados.nome_produto}",
            "${dados.valor}",
            "${dados.data_valida}",
            "${dados.descricao}",
            "${dados.nome_imagem}"
        )`)

        .then(result => {
        console.log('promocao cadastrado com sucesso');
        resposta({message: 'promocao cadastrado com sucesso!'})
    }).catch(erro => {
        console.log('Erro ao cadastrar promocao');
        resposta({erro: 'Erro ao cadastrar promocao'})
    })
})


inserirRota('/buscar_mercado',
    function (dados, resposta) {
        console.log(dados);
        database('SELECT * FROM MERCADO').then(result => {
            resposta( result );
        }).catch(erro => {
            resposta({ erro: "Erro ao buscar mercado!" });
        });
    });

inserirRota('/buscar_endereco',
function (dados, resposta) {
    console.log(dados);
    database('SELECT * FROM ENDERECO').then(result => {
        resposta( result );
    }).catch(erro => {
        resposta({ erro: "Erro ao buscar endereco!" });
    });
});

inserirRota('/buscar_promocao',
function (dados, resposta) {
    console.log(dados);
    database('SELECT * FROM PROMOCAO').then(result => {
        resposta( result );
    }).catch(erro => {
        resposta({ erro: "Erro ao buscar promocao!" });
    });
});




