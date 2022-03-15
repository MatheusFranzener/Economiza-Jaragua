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
  }

 nome_produto = ""
 valor = ""
 data_valida = ""
 descricao = ""
 nome_imagem =""
       

  cadastrarPromocao() {
    fetch('http://localhost:3000/api/cadastrar_promocao', { method: 'POST', body: JSON.stringify({ nome_produto: this.nome_produto, valor: this.valor, data_valida: this.data_valida, descricao: this.descricao, nome_imagem: this.nome_imagem}), headers: {"Content-Type": "application/json"}});
    this.router.navigate(['home'])
  }

}
