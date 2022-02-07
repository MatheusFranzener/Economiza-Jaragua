import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  user: "";
  password: "";

  ngOnInit() {
  }

  logar(){
    localStorage.setItem('USER',this.user);
    localStorage.setItem('PASSWORD',this.password);
    this.router.navigate(['/home/'])
  }

}
