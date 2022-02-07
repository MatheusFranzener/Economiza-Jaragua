import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-promocoes-mercados',
  templateUrl: './promocoes-mercados.component.html',
  styleUrls: ['./promocoes-mercados.component.css']
})
export class PromocoesMercadosComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
