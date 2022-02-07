import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-informacoes-mercados',
  templateUrl: './informacoes-mercados.component.html',
  styleUrls: ['./informacoes-mercados.component.css']
})
export class InformacoesMercadosComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
