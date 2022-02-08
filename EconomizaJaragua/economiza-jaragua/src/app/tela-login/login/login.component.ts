import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsuarioService } from '../../services/usuario.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private usuarioService:UsuarioService,
    private router: Router) { }

  user: "";
  password: "";

  ngOnInit() {
    this.usuarioService.buscarUsuarios()
    .then(resultado => {
      console.log('RESULTADO:',resultado)
    }).catch(erro =>{
      console.log('ERRO AO BUSCAR USUARIOS: ',erro)
    })
  }

  logar(){
    localStorage.setItem('USER',this.user);
    localStorage.setItem('PASSWORD',this.password);
    this.router.navigate(['/home/'])
  }

  logarUser(){
    this.router.navigate(['/home'])
  }

  criarConta(){
    this.router.navigate(['/login/cadastro'])
  }

}
