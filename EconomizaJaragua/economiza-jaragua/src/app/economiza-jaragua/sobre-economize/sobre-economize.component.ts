import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sobre-economize',
  templateUrl: './sobre-economize.component.html',
  styleUrls: ['./sobre-economize.component.css']
})
export class SobreEconomizeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  duvida(){
    this.router.navigate(['economiza-jaragua/entre-em-contato'])
  }

}
