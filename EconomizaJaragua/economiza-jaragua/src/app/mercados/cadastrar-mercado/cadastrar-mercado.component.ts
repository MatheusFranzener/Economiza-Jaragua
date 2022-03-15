import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-cadastrar-mercado',
  templateUrl: './cadastrar-mercado.component.html',
  styleUrls: ['./cadastrar-mercado.component.css']
})
export class CadastrarMercadoComponent implements OnInit {

  constructor(private usuarioService: UsuarioService,
    private router:Router) { }

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

  cadastrarEndereco() {
    fetch('http://localhost:3000/api/cadastrar_endereco', { method: 'POST', body: JSON.stringify({ uf_estado: this.uf_estado, nome_cidade: this.nome_cidade, rua: this.rua, bairro: this.bairro, numero: this.numero, complemento: this.complemento}), headers: {"Content-Type": "application/json"}});
  }

  cadastrarMercado() {
    fetch('http://localhost:3000/api/cadastrar_mercado', { method: 'POST', body: JSON.stringify({ cnpj: this.cnpj, nome_mercado: this.nome_mercado, telefone: this.telefone}), headers: {"Content-Type": "application/json"}});
    this.router.navigate(['home'])
  }
}
