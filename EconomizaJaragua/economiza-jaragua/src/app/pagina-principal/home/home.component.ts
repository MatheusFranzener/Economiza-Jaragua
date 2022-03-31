import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private usuarioService: UsuarioService,
    private router: Router) { }

  ngOnInit(
  ) {

    fetch('/api/buscar_categoria', { method: 'POST' }).then(function (result) {

      result.json().then(function (data) {

        if (data.length < 1) {
          fetch('/api/cadastro_categoria', { method: 'POST' });
        }
      })

    })

    this.pegarUser();
    
    this.usuarioService.buscarNotificacao()
      .then(resultado => {
        console.log('NOTIFICACAO:', resultado)
      }).catch(erro => {
        console.log('ERRO AO BUSCAR NOTIFICACAO: ', erro)
      })
  }

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
}
