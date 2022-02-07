import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-mercado',
  templateUrl: './cadastrar-mercado.component.html',
  styleUrls: ['./cadastrar-mercado.component.css']
})
export class CadastrarMercadoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
