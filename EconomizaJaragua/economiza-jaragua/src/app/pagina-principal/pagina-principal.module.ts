import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { HomeComponent } from './home/home.component';
import { CadastrarPromocaoComponent } from './cadastrar-promocao/cadastrar-promocao.component';
import { MelhoresOfertasComponent } from './melhores-ofertas/melhores-ofertas.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [HomeComponent, CadastrarPromocaoComponent, MelhoresOfertasComponent],
  exports: [HomeComponent, CadastrarPromocaoComponent, MelhoresOfertasComponent]
})
export class PaginaPrincipalModule { }
