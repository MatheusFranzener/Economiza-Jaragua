import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-cadastrar-promocao',
  templateUrl: './cadastrar-promocao.component.html',
  styleUrls: ['./cadastrar-promocao.component.css']
})
export class CadastrarPromocaoComponent implements OnInit {

  constructor(private usuarioService: UsuarioService,
    private router:Router) { }

  ngOnInit() {
    this.usuarioService.buscarPromocao()
    .then(resultado => {
      console.log('PROMOCAO:', resultado)
    }).catch(erro => {
      console.log('ERRO AO BUSCAR PROMOCAO: ', erro)
    })

    this.usuarioService.buscarCategoria()
    .then(resultado => {
      console.log('CATEGORIA:', resultado)
    }).catch(erro => {
      console.log('ERRO AO BUSCAR CATEGORIA: ', erro)
    })

    this.pegarUser();
    this.dropBox();
    this.dropBox2();
  }


 nome_produto = ""
 valor = ""
 data_valida = ""
 descricao = ""
 nome_imagem =""
 cnpj_mercado=""
 categoria_mercado=""

 
 usuario="Usuário!";
 nome=""
 local_nome = localStorage.getItem('administrador')
 local_senha = localStorage.getItem('administrador_senha')

 codigo="";
 nomeCategoria="";
 descricaoCategoria="";

 addCnpj(cnpj){
   this.cnpj_mercado = cnpj
 }

 addCategoria(codigo){
  this.categoria_mercado = codigo
 }

 pegarUser(){
  var self = this
  fetch('http://localhost:3000/api/login', { method: 'POST', body: JSON.stringify({ nome: this.local_nome, senha: this.local_senha}), headers: {"Content-Type": "application/json"}}).then(function (e) {

    e.json().then(function (data) {

    console.log("teste2: ",data)

    if(localStorage.getItem('administrador')){
      self.nome = data.user.NOME;
    } else {
      self.nome = "Usuário";
    }
    })
  })
}

  dropBox(){
    fetch('http://localhost:3000/api/buscar_mercado', { method: 'POST', headers: {"Content-Type": "application/json"}}).then(function(e){
      e.json().then(function(data){
        data.forEach(a => {
          let opcao = document.createElement("option")
          let select = document.querySelector(".form-select2")
          opcao.value = a.CNPJ
          opcao.innerText = a.NOME_MERCADO
          select.appendChild(opcao)
        });
      })
    });
  }

  dropBox2(){
    fetch('http://localhost:3000/api/buscar_categoria', { method: 'POST', headers: {"Content-Type": "application/json"}}).then(function(f){
      f.json().then(function(data){
        data.forEach(b => {
          let opcao2 = document.createElement("option")
          let select2 = document.querySelector(".form-select1")
          opcao2.value = b.CODIGO
          opcao2.innerText = b.NOME
          select2.appendChild(opcao2)
        });
      })
    });
  }

  cadastrarPromocao() {
    fetch('http://localhost:3000/api/cadastrar_promocao', { method: 'POST', body: JSON.stringify({ nome_produto: this.nome_produto, valor: this.valor, data_valida: this.data_valida, descricao: this.descricao, nome_imagem: this.nome_imagem, cnpj_mercado:this.cnpj_mercado, categoria_mercado:this.categoria_mercado}), headers: {"Content-Type": "application/json"}});
    this.router.navigate(['home'])
  }

  deslogar(){
    this.router.navigate(['/login'])
    localStorage.clear()
  }

  ofertas(){
    this.router.navigate(['home/melhores-ofertas'])
  }

  sobre(){
    this.router.navigate(['economiza-jaragua/sobre'])
  }

  mercados(){
    this.router.navigate(['mercados/informacoes'])
  }

  contato(){
    this.router.navigate(['economiza-jaragua/entre-em-contato'])
  }

  cadastrarMercados(){
    this.router.navigate(['/mercados/cadastrar'])
  }

  cadastrarPromo(){
    this.router.navigate(['/home/cadastrar-promocao'])
  }
}
