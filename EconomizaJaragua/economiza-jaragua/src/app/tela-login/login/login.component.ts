import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { UsuarioService } from '../../services/usuario.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService,
    private router: Router) { }

  user= "";
  password= "";
  emailUser = "";


  ngOnInit() {

    this.usuarioService.buscarUsuarios()
      .then(resultado => {
        console.log('RESULTADO:', resultado)
      }).catch(erro => {
        console.log('ERRO AO BUSCAR USUARIOS: ', erro)
      })

      
  }


  logar() {
    var self = this;
    fetch('http://localhost:3000/api/login', { method: 'POST', body: JSON.stringify({ nome: this.user, senha: this.password }), headers: { "Content-Type": "application/json" } }).then(function (e) {
      console.log(e)

      e.json().then(function (data) {

  
        if (data.user) {
          localStorage.setItem('administrador', data.user.NOME)
          localStorage.setItem('administrador_senha', self.password)
          self.router.navigate(['/home/'])
          localStorage.setItem('user', '')
        } else {
          alert("Login ou Senha Incorretos!");
        }
      })
    })
  }

  logarUser() {
    localStorage.setItem('user', 'usuario')
    localStorage.setItem('administrador', '')
    this.router.navigate(['/home'])
  }

  notificacoes(){
    fetch('http://localhost:3000/api/cadastrar_notificacao', { method: 'POST', body: JSON.stringify({ emailUser:this.emailUser }), headers: { "Content-Type": "application/json" } })
    localStorage.setItem('user', 'usuario')
    localStorage.setItem('administrador', '')
    this.router.navigate(['/home'])
  }

  criarConta() {
    this.router.navigate(['/login/cadastro'])
  }





}
