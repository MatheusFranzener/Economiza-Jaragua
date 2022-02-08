inserirRota('/buscar_usuario',
    function (dados, resposta) {
        console.log(dados);
        database('SELECT * FROM USER').then(result => {
            resposta({ list: result });
        }).catch(erro => {
            resposta({ erro: "Erro ao buscar os usuários!" });
        });
    });

// inserirRota('/login',
//     function (dados, resposta) {
//         console.log(dados);

//         database(`SELECT * FROM USER WHERE NOME = "${dados.nome}" AND SENHA = "${dados.senha}" LIMIT 1`)
//         .then(result => {
//             console.log('result:',result);
//             resposta({ user: result[0] });
//         }).catch(erro => {
//             resposta({ erro: "Erro ao buscar os usuários!" });
//         });
//     });

inserirRota('/criar_usuario',
function name(dados,resposta){
    console.log(dados);

    if(!dados.nome){
        return resposta({erro: 'É necessário preencher o nome'})
    }

    if(!dados.senha){
        return resposta({erro: 'É necessário preencher a senha'})
    }

    database(`INSERT INTO USER 
    (
        NOME,
        SENHA
        ) 
        VALUES (
            "${dados.nome}",
            "${dados.senha}"
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



