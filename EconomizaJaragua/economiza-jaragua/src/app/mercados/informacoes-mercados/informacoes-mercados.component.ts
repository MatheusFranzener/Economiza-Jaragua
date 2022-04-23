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
    this.buscarMercados();
    this.pegarUser();
  }

  listaMercados = []
  listaMercadosBackup = []
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
        self.listaMercados = dados;
        self.listaMercadosBackup = dados;
      })
    })
  }

  filtroMercado() {
    var self = this;
    console.log(self.barraPesquisa);
    let filtro = self.listaMercadosBackup.filter(function (element) {
      return element.NOME_MERCADO.startsWith(self.barraPesquisa);
    });
    if(self.barraPesquisa == ""){
      self.listaMercados = self.listaMercadosBackup
    } else {
      self.listaMercados = filtro;
    }
    console.log("Teste do filtro:",filtro);
  }

}
