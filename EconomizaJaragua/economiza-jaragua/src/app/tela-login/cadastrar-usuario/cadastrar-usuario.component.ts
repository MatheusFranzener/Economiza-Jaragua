import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nome = ""
  senha = ""
  telefone = ""
  email = ""

  cadastrar() {
    fetch('http://localhost:3000/api/criar_usuario', { method: 'POST', body: JSON.stringify({ nome: this.nome, senha: this.senha, telefone: this.telefone, email: this.email}), headers: {"Content-Type": "application/json"}});
    this.router.navigate(['login'])
  }

  telaLogin(){
    this.router.navigate(['login'])
  }

}
