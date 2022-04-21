import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';



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
    NOME_IMAGEM: "undefined",
    NOME_PRODUTO: "",
    VALOR: 0}]

  constructor(private route: ActivatedRoute) { 
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
  }

  // CODIGO: 1
  // CODIGO_CATEGORIA: 5
  // DATA_VALIDA: ""
  // DESCRICAO: "a"
  // IMAGEM_MERCADO: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAzI
  // NOME_IMAGEM: "undefined"
  // NOME_PRODUTO: "a"
  // VALOR: 1

}
