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


