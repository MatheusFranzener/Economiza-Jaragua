import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-cadastrar-promocao',
  templateUrl: './cadastrar-promocao.component.html',
  styleUrls: ['./cadastrar-promocao.component.css']
})
export class CadastrarPromocaoComponent implements OnInit {

  constructor(private usuarioService: UsuarioService,
    private router:Router) { }

  ngOnInit() {
    this.usuarioService.buscarPromocao()
    .then(resultado => {
      console.log('PROMOCAO:', resultado)
    }).catch(erro => {
      console.log('ERRO AO BUSCAR PROMOCAO: ', erro)
    })

    this.dropBox();
  }


 nome_produto = ""
 valor = ""
 data_valida = ""
 descricao = ""
 nome_imagem =""
 cnpj_mercado=""
       

 addCnpj(cnpj){
   this.cnpj_mercado = cnpj
 }

  dropBox(){
    fetch('http://localhost:3000/api/buscar_mercado', { method: 'POST', headers: {"Content-Type": "application/json"}}).then(function(e){
      e.json().then(function(data){
        data.forEach(a => {
          let opcao = document.createElement("option")
          let select = document.querySelector(".form-select")
          opcao.value = a.CNPJ
          opcao.innerText = a.NOME_MERCADO
          select.appendChild(opcao)
        });
      })
    });
  }

  cadastrarPromocao() {
    fetch('http://localhost:3000/api/cadastrar_promocao', { method: 'POST', body: JSON.stringify({ nome_produto: this.nome_produto, valor: this.valor, data_valida: this.data_valida, descricao: this.descricao, nome_imagem: this.nome_imagem, cnpj_mercado:this.cnpj_mercado}), headers: {"Content-Type": "application/json"}});
    this.router.navigate(['home'])
  }

}
