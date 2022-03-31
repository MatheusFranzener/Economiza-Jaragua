import { Component, OnInit } from '@angular/core';
import { e } from '@angular/core/src/render3';
import { Router } from '@angular/router';

import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-cadastrar-mercado',
  templateUrl: './cadastrar-mercado.component.html',
  styleUrls: ['./cadastrar-mercado.component.css']
})
export class CadastrarMercadoComponent implements OnInit {

  constructor(private usuarioService: UsuarioService,
    private router: Router) { }

  ngOnInit() {
    this.usuarioService.buscarMercados()
      .then(resultado => {
        console.log('MERCADOS:', resultado)
      }).catch(erro => {
        console.log('ERRO AO BUSCAR USUARIOS: ', erro)
      })

    this.usuarioService.buscarEndereco()
      .then(resultado => {
        console.log('ENDERECOS:', resultado)
      }).catch(erro => {
        console.log('ERRO AO BUSCAR USUARIOS: ', erro)
      })

      this.pegarUser();
  }

  cnpj = ""
  nome_mercado = ""
  telefone = ""

  uf_estado = ""
  nome_cidade = ""
  rua = ""
  bairro = ""
  numero = ""
  complemento = ""
  codigo: number

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

  cadastrarEndereco() {
    var rua2 = this.rua;
    var numero2 = this.numero;
    var self = this;
    fetch('http://localhost:3000/api/cadastrar_endereco', { method: 'POST', body: JSON.stringify({ uf_estado: this.uf_estado, nome_cidade: this.nome_cidade, rua: this.rua, bairro: this.bairro, numero: this.numero, complemento: this.complemento }), headers: { "Content-Type": "application/json" } }).then(function (e) {

      console.log("Segundo fetch: ", e)


      e.json().then(function (data) {
        console.log("Terceiro fetch: ", data)
        fetch("/api/validar_endereco", { method: "POST", body: JSON.stringify({ rua: rua2, numero: numero2 }), headers: { "Content-Type": "application/json" } }).then(function (resultado) {
          console.log("Resultado: ", resultado)
          resultado.json().then(function (a) {
            console.log("Quarto fetch: ", a)
            console.log("Codigo: ", a.endereco.CODIGO)
            self.cadastrarMercado(a.endereco.CODIGO)
          })
        })
      })
    });
  }

  cadastrarMercado(codigo) {
    var self = this;
    fetch('http://localhost:3000/api/cadastrar_mercado', {
      method: 'POST', body: JSON.stringify({

        cnpj: self.cnpj, nome_mercado: self.nome_mercado, telefone: self.telefone, codigo: codigo
      }), headers: { "Content-Type": "application/json" }
    });
    self.router.navigate(['home'])
  }
}


