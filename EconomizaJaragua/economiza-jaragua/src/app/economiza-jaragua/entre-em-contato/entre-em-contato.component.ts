import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-entre-em-contato',
  templateUrl: './entre-em-contato.component.html',
  styleUrls: ['./entre-em-contato.component.css']
})
export class EntreEmContatoComponent implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit() {

  }

  nome = "";
  email = "";
  campo_texto = "";

  cadastrarContato() {
    fetch('http://localhost:3000/api/cadastrar_contato', { method: 'POST', body: JSON.stringify({ nome: this.nome, email: this.email, campo_texto: this.campo_texto }), headers: { "Content-Type": "application/json" } })
    this.router.navigate(['home'])
  }

  voltarContato() {
    this.router.navigate(['home'])
  }

}
