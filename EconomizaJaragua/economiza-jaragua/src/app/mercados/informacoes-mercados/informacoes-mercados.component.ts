import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-informacoes-mercados',
  templateUrl: './informacoes-mercados.component.html',
  styleUrls: ['./informacoes-mercados.component.css']
})
export class InformacoesMercadosComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    this.pegarUser();
    this.buscarMercados();
  }

  listaMercados = [ ]
  barraPesquisa ="";
  user="";
  password="";
  usuario="Usuário!";
  nome="";

  local_nome = localStorage.getItem('administrador')
  local_senha = localStorage.getItem('administrador_senha')

  
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

  cadastrarPromocao(){
    this.router.navigate(['/home/cadastrar-promocao'])
  }

  home(){
    this.router.navigate(['home'])
  }

  buscarMercados() {
    var self = this
    fetch('http://localhost:3000/api/buscar_mercado', { method: 'POST' }).then(function (e) {

      e.json().then(function (dados) {
        self.listaMercados = dados
      })
    })
  }


  criarDivFiltro(filtro){
    let divMercados1 = document.querySelector(".divMercados1")
    let divMercados =  document.querySelector(".divMercados")

    if(divMercados){
      divMercados.remove()
    }
    
    let divNova = document.createElement("div")
    divMercados1.appendChild(divNova)
    filtro.forEach(e => {
      let div = document.createElement("div")
      divNova.appendChild(div)
      let divNome = document.createElement("div")
      div.appendChild(divNome)
      divNome.innerText = e.NOME_MERCADO
    });
  }


  filtroPromocao() {
    var self = this;
    let filtro = this.listaMercados.filter(function (element) {
      return element.NOME_MERCADO.startsWith(self.barraPesquisa);
    });
    this.criarDivFiltro(filtro);
  }

}
