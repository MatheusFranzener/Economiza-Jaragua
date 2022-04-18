inserirRota('/buscar_usuario',
    function (dados, resposta) {
        console.log(dados);
        database('SELECT * FROM ADMINISTRADOR').then(result => {
            resposta( result );
        }).catch(erro => {
            resposta({ erro: "Erro ao buscar os usuários!" });
        });
    });

inserirRota('/validar_endereco',
    function (dados, resposta) {
        console.log(dados);
        database(`SELECT * FROM ENDERECO WHERE RUA = "${dados.rua}" AND NUMERO = "${dados.numero}" LIMIT 1`).then(result => {
            console.log("resultado:",result)
            resposta({endereco:result[0]});
        }).catch(erro => {
            resposta({ erro: "Erro ao buscar os endereco!" });
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
        TELEFONE,
        CODIGO_ENDERECO,
        IMAGEM_MERCADO
        ) 
        VALUES (
            "${dados.cnpj}",
            "${dados.nome_mercado}",
            "${dados.telefone}",
            "${dados.codigo}",
            "${dados.logo64}"
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
        // resposta({message: 'Endereco cadastrado com sucesso!'})
        resposta(dados)
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
        NOME_IMAGEM,
        CNPJ_MERCADO,
        CODIGO_CATEGORIA
        ) 
        VALUES (
            "${dados.nome_produto}",
            "${dados.valor}",
            "${dados.data_valida}",
            "${dados.descricao}",
            "${dados.logo64}",
            "${dados.cnpj_mercado}",
            "${dados.categoria_mercado}"
        )`)

        .then(result => {
        console.log('promocao cadastrado com sucesso');
        resposta({message: 'promocao cadastrado com sucesso!'})
    }).catch(erro => {
        console.log('Erro ao cadastrar promocao');
        resposta({erro: 'Erro ao cadastrar promocao'})
    })
})

inserirRota('/cadastrar_contato',
function(dados,resposta){
    console.log(dados);

    database(`INSERT INTO CONTATO 
    (
        NOME,
        EMAIL,
        CAMPO_TEXTO
        ) 
        VALUES (
            "${dados.nome}",
            "${dados.email}",
            "${dados.campo_texto}"
        )`)

        .then(result => {
        console.log('Contato cadastrado com sucesso');
        resposta({message: 'Contato cadastrado com sucesso!'})
    }).catch(erro => {
        console.log('Erro ao cadastrar contato');
        resposta({erro: 'Erro ao cadastrar contato'})
    })
})

inserirRota('/cadastrar_notificacao',
function(dados,resposta){
    console.log(dados);

    database(`INSERT INTO USUARIO 
    (
        EMAIl
        ) 
        VALUES (
            "${dados.emailUser}"
        )`)

        .then(result => {
        console.log('Notificacao cadastrado com sucesso');
        resposta({message: 'Notificacao cadastrado com sucesso!'})
    }).catch(erro => {
        console.log('Erro ao cadastrar Notificacao');
        resposta({erro: 'Erro ao cadastrar Notificacao'})
    })
})

inserirRota('/buscar_mercado',
    function (dados, resposta) {
        console.log(dados);
        database('SELECT MERCADO.NOME_MERCADO, MERCADO.CNPJ,MERCADO.TELEFONE,MERCADO.IMAGEM_MERCADO,ENDERECO.BAIRRO,ENDERECO.RUA,ENDERECO.NUMERO,ENDERECO.BAIRRO FROM MERCADO INNER JOIN ENDERECO ON MERCADO.CODIGO_ENDERECO = ENDERECO.CODIGO').then(result => {
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
    database('SELECT PROMOCAO.NOME_PRODUTO,PROMOCAO.VALOR,PROMOCAO.DATA_VALIDA,PROMOCAO.DESCRICAO,PROMOCAO.NOME_IMAGEM,PROMOCAO.CODIGO_CATEGORIA,MERCADO.IMAGEM_MERCADO FROM PROMOCAO INNER JOIN MERCADO ON PROMOCAO.CNPJ_MERCADO = MERCADO.CNPJ').then(result => {
        resposta( result );
    }).catch(erro => {
        resposta({ erro: "Erro ao buscar promocao!" });
    });
});

inserirRota('/buscar_contato',
function (dados, resposta) {
    console.log(dados);
    database('SELECT * FROM CONTATO').then(result => {
        resposta( result );
    }).catch(erro => {
        resposta({ erro: "Erro ao buscar contato!" });
    });
});

inserirRota('/buscar_notificacao',
function (dados, resposta) {
    console.log(dados);
    database('SELECT * FROM USUARIO').then(result => {
        resposta( result );
    }).catch(erro => {
        resposta({ erro: "Erro ao buscar Notificacao!" });
    });
});

inserirRota('/cadastro_categoria',
function (dados, resposta) {
    database('INSERT INTO CATEGORIA VALUES (NULL,"Carnes","Todos os mais variados tipos de carnes!"),(NULL,"Frutas","Todos os mais variados tipos de frutas!"),(NULL,"Verduras","Todos os mais variados tipos de verduras!"),(NULL,"Bebidas","Todos os mais variados tipos de bebidas!"),(NULL,"Padaria","Todos os mais variados tipos de produto da padaria!"),(NULL,"Frios e Laticínios","Todos os mais variados tipos de frios e laticínios!")').then(result => {
        resposta( result );
    }).catch(erro => {
        resposta({ erro: "Erro ao inserir promoções!" });
    });
});

inserirRota('/buscar_categoria',
    function (dados, resposta) {
        console.log(dados);
        database('SELECT * FROM CATEGORIA').then(result => {
            resposta( result );
        }).catch(erro => {
            resposta({ erro: "Erro ao buscar categoria!" });
        });
    });





