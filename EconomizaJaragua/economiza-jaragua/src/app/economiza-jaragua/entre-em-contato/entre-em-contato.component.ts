import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entre-em-contato',
  templateUrl: './entre-em-contato.component.html',
  styleUrls: ['./entre-em-contato.component.css']
})
export class EntreEmContatoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
