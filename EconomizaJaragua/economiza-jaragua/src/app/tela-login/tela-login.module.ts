import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, CadastrarUsuarioComponent]
})
export class TelaLoginModule { }
