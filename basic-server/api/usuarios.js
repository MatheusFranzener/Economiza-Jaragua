inserirRota('/buscar_usuario',
function(dados,resposta){
    console.log(dados);

    resposta({
        ok:"Requisição efetuada com sucesso!"
    })
    
})

inserirRota('/criar_usuario',
function name(dados,resposta){
    console.log(dados);

    if(!dados.nome){
        return resposta({erro: 'É necessário preencher o nome'})
    }

    if(!dados.nickname){
        return resposta({erro: 'É necessário preencher o nickname'})
    }

    database(`INSERT INTO USER 
    (
        NOME,
        NICKNAME
        ) 
        VALUES (
            "${dados.nome}",
            "${dados.nickname}"
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