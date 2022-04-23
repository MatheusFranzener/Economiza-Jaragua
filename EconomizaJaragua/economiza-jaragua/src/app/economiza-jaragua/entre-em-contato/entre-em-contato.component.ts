import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsuarioService } from '../../services/usuario.service';


@Component({
  selector: 'app-entre-em-contato',
  templateUrl: './entre-em-contato.component.html',
  styleUrls: ['./entre-em-contato.component.css']
})
export class EntreEmContatoComponent implements OnInit {

  constructor(private usuarioService: UsuarioService,
    private router: Router) { }

  ngOnInit() {
    this.usuarioService.buscarContato()
      .then(resultado => {
        console.log('CONTATO:', resultado)
      }).catch(erro => {
        console.log('ERRO AO BUSCAR CONTATOS: ', erro)
      })
  }

  nome = "";
  email = "";
  campo_texto = "";

  cadastrarContato() {
    fetch('http://localhost:3000/api/cadastrar_contato', { method: 'POST', body: JSON.stringify({ nome: this.nome, email: this.email, campo_texto: this.campo_texto }), headers: { "Content-Type": "application/json" } })
    this.router.navigate(['home'])
  }

  voltarHome() {
    this.router.navigate(['home'])
  }



}
