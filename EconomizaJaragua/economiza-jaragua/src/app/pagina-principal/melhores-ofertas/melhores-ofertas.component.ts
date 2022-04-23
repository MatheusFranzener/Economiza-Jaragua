import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Data, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-melhores-ofertas',
  templateUrl: './melhores-ofertas.component.html',
  styleUrls: ['./melhores-ofertas.component.css']
})
export class MelhoresOfertasComponent implements OnInit {

  codigo
  produto = [{CODIGO:0,CODIGO_CATEGORIA: 0,
    DATA_VALIDA: "",
    DESCRICAO: "",
    IMAGEM_MERCADO: "",
    NOME_IMAGEM: "",
    NOME_PRODUTO: "",
    VALOR: 0,
    VALOR_ANTIGO:0}]

  constructor(private route: ActivatedRoute,private usuarioService: UsuarioService,
    private router: Router) { 
    var self = this
    this.codigo = this.route.snapshot.paramMap.get('codigo');
    console.log("Codigo: ",this.codigo)
    fetch('/api/buscar_promocao_especifica', { method: 'POST', body: JSON.stringify({ codigo: this.codigo}), headers: { "Content-Type": "application/json" } }).then(function (result) {

      result.json().then(function (data) {
        self.produto = data
        console.log(data)
      })

    })
  }

  ngOnInit() {
    this.getRandomIntInclusive(10,100);
    this.pegarUser();
  }

  desconto = ""

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    this.desconto =  Math.floor(Math.random() * (max - min + 1)) + min;
  }


  days:number = 0;
  hours:number = 0;
  mins:number = 0;
  secs:number = 0;
  
  x = setInterval(()=>{
    var futureDate = new Date(`${this.produto[0].DATA_VALIDA} 00:00:00`).getTime();
    var today = new Date().getTime();
    var distancia = futureDate - today;
    this.days = Math.floor(distancia/(1000 * 60 * 60 * 24));
    this.hours = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.mins = Math.floor((distancia % (1000 * 60 * 60 )) / (1000 * 60));
    this.secs = Math.floor((distancia % (1000 * 60 )) / (1000 ));
  },1000)

  user = "";
  password = "";
  usuario = "Usuário!";
  nome = "";

  local_nome = localStorage.getItem('administrador')
  local_senha = localStorage.getItem('administrador_senha')


  pegarUser() {
    var self = this
    fetch('http://localhost:3000/api/login', { method: 'POST', body: JSON.stringify({ nome: this.local_nome, senha: this.local_senha }), headers: { "Content-Type": "application/json" } }).then(function (e) {

      e.json().then(function (data) {

        console.log("teste2: ", data)

        if (localStorage.getItem('administrador')) {
          self.nome = data.user.NOME;
        } else {
          self.nome = "Usuário";
        }
      })
    })
  }

  home(){
    this.router.navigate(['home'])
  }

  contato() {
    this.router.navigate(['economiza-jaragua/entre-em-contato'])
  }

  cadastrarMercados() {
    this.router.navigate(['/mercados/cadastrar'])
  }

  cadastrarPromocao() {
    this.router.navigate(['/home/cadastrar-promocao'])
  }

  sobre() {
    this.router.navigate(['economiza-jaragua/sobre'])
  }

  mercados() {
    this.router.navigate(['mercados/informacoes'])
  }

  deslogar() {
    this.router.navigate(['/login'])
    localStorage.clear()
  }



}
