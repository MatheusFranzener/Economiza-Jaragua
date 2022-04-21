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

    this.buscarPromocoes();

    this.pegarUser();

    this.usuarioService.buscarNotificacao()
      .then(resultado => {
        console.log('NOTIFICACAO:', resultado)
      }).catch(erro => {
        console.log('ERRO AO BUSCAR NOTIFICACAO: ', erro)
      })
  }

  listaPromocoes = []
  listaPromocoesBackup = []
  barraPesquisa = "";
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

  deslogar() {
    this.router.navigate(['/login'])
    localStorage.clear()
  }

  ofertas() {
    this.router.navigate(['home/melhores-ofertas'])
  }

  home(){
    this.router.navigate(['home'])
  }

  sobre() {
    this.router.navigate(['economiza-jaragua/sobre'])
  }

  mercados() {
    this.router.navigate(['mercados/informacoes'])
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

  buscarPromocoes() {
    var self = this
    fetch('http://localhost:3000/api/buscar_promocao', { method: 'POST' }).then(function (e) {

      e.json().then(function (dados) {
        self.listaPromocoes = dados
        self.listaPromocoesBackup = dados
        // self.colocarPromocao()
      })
    })
  }

  criarDivFiltro(filtro){
    let divOfertas1 = document.querySelector(".divOfertas1")
    let divOfertas =  document.querySelector(".divOfertas")

    if(divOfertas){
      divOfertas.remove()
    }
    
    let linha = document.createElement("div")
    divOfertas1.appendChild(linha)
    console.log("teste")
    filtro.forEach(e => {
        let ofertas = document.querySelector('.ofertas') 
        ofertas.appendChild(linha)
        let campoOferta = document.createElement('div')
        campoOferta.className = 'campoOferta'
        linha.appendChild(campoOferta)
        let headerOferta = document.createElement('div')
        headerOferta.className = 'headerOferta'
        campoOferta.appendChild(headerOferta)
        let imagemMercado = document.createElement('img')
        imagemMercado.className = 'imgMercado'
        imagemMercado.src = e.IMAGEM_MERCADO
        headerOferta.appendChild(imagemMercado)
        let precoOferta = document.createElement('div')
        precoOferta.className = 'precoOferta'
        headerOferta.appendChild(precoOferta)
        let spanPreco = document.createElement('span')
        spanPreco.innerText = 'R$ ' + e.VALOR + ' KG'
        precoOferta.appendChild(spanPreco)
        let mainOferta = document.createElement('div')
        mainOferta.className = 'mainOferta'
        campoOferta.appendChild(mainOferta)
        let imagemOferta = document.createElement('img')
        imagemOferta.className = 'imgOferta'
        imagemOferta.src = e.NOME_IMAGEM
        mainOferta.appendChild(imagemOferta)
        let descricaoOferta = document.createElement('div')
        descricaoOferta.className = 'descricaoOferta'
        mainOferta.appendChild(descricaoOferta)
        let campoDescricao = document.createElement('div')
        campoDescricao.className = 'campoDescricao'
        campoDescricao.innerText = e.DESCRICAO
        descricaoOferta.appendChild(campoDescricao)
        let dataOferta = document.createElement('div')
        dataOferta.className = 'dataOferta'
        mainOferta.appendChild(dataOferta)
        let relogio = document.createElement('div')
        relogio.className = 'relogio'
        dataOferta.appendChild(relogio)
        let imgRelogio = document.createElement('img')
        imgRelogio.src = 'https://images.vexels.com/media/users/3/155826/isolated/lists/71b6db7185dfc25bb9fab870a37863a0-icone-de-cronometro.png'
        imgRelogio.className = 'imgRelogio'
        relogio.appendChild(imgRelogio)
        let campoData = document.createElement('div')
        campoData.className = 'campoData'
        dataOferta.appendChild(campoData)
        let data = document.createElement('div')
        data.className = 'data'
        data.innerText = e.DATA_VALIDA
        campoData.appendChild(data)
    });
    
    // let div = document.createElement("div")
      // divNova.appendChild(div)
      // let divNome = document.createElement("div")
      // div.appendChild(divNome)
      // divNome.innerText = e.NOME_PRODUTO
  }

  filtroPromocao() {
    var self = this;
    let filtro = this.listaPromocoesBackup.filter(function (element) {
      return element.DESCRICAO.startsWith(self.barraPesquisa);
    });
    if(this.barraPesquisa == ""){
      this.listaPromocoes = this.listaPromocoesBackup
    } else {
      this.listaPromocoes = filtro;
    }
    console.log(filtro);
    // this.criarDivFiltro(filtro); 
    
  }

  redirecionar(codigo){
    console.log(codigo)
    this.router.navigate(['/home/'+codigo])
  }

  // colocarPromocao(){
  //   var self = this
  //   let contagem = 0
  //   let linha
  //   let ofertas = document.querySelector('.ofertas')
  //   this.listaPromocoes.forEach(function(e){
  //     if(e.CODIGO_CATEGORIA == 1){
  //       if(contagem == 0 || contagem == 2){
  //         linha = document.createElement('div')
  //         linha.className = 'linhaOferta'
  //         ofertas.appendChild(linha)
  //         contagem++
  //       } else {
  //         linha = document.querySelector('.linhaOferta')
  //         ofertas.appendChild(linha)
  //         contagem++
  //       }
  //       let campoOferta = document.createElement('div')
  //       campoOferta.className = 'campoOferta'
  //       linha.appendChild(campoOferta)
  //       let headerOferta = document.createElement('div')
  //       headerOferta.className = 'headerOferta'
  //       campoOferta.appendChild(headerOferta)
  //       let imagemMercado = document.createElement('img')
  //       imagemMercado.className = 'imgMercado'
  //       imagemMercado.src = e.IMAGEM_MERCADO
  //       headerOferta.appendChild(imagemMercado)
  //       let precoOferta = document.createElement('div')
  //       precoOferta.className = 'precoOferta'
  //       headerOferta.appendChild(precoOferta)
  //       let spanPreco = document.createElement('span')
  //       spanPreco.innerText = 'R$ ' + e.VALOR + ' KG'
  //       precoOferta.appendChild(spanPreco)
  //       let mainOferta = document.createElement('div')
  //       mainOferta.className = 'mainOferta'
  //       campoOferta.appendChild(mainOferta)
  //       let imagemOferta = document.createElement('img')
  //       imagemOferta.className = 'imgOferta'
  //       imagemOferta.src = e.NOME_IMAGEM
  //       mainOferta.appendChild(imagemOferta)
  //       let descricaoOferta = document.createElement('div')
  //       descricaoOferta.className = 'descricaoOferta'
  //       mainOferta.appendChild(descricaoOferta)
  //       let campoDescricao = document.createElement('div')
  //       campoDescricao.className = 'campoDescricao'
  //       campoDescricao.innerText = e.DESCRICAO
  //       descricaoOferta.appendChild(campoDescricao)
  //       let dataOferta = document.createElement('div')
  //       dataOferta.className = 'dataOferta'
  //       mainOferta.appendChild(dataOferta)
  //       let relogio = document.createElement('div')
  //       relogio.className = 'relogio'
  //       dataOferta.appendChild(relogio)
  //       let imgRelogio = document.createElement('img')
  //       imgRelogio.src = 'https://images.vexels.com/media/users/3/155826/isolated/lists/71b6db7185dfc25bb9fab870a37863a0-icone-de-cronometro.png'
  //       imgRelogio.className = 'imgRelogio'
  //       relogio.appendChild(imgRelogio)
  //       let campoData = document.createElement('div')
  //       campoData.className = 'campoData'
  //       dataOferta.appendChild(campoData)
  //       let data = document.createElement('div')
  //       data.className = 'data'
  //       data.innerText = e.DATA_VALIDA
  //       campoData.appendChild(data)

  //       contagem++
  //     }
  //   })

  // }
}
