import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CadastrarPromocaoComponent } from './cadastrar-promocao/cadastrar-promocao.component';
import { MelhoresOfertasComponent } from './melhores-ofertas/melhores-ofertas.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, CadastrarPromocaoComponent, MelhoresOfertasComponent]
})
export class PaginaPrincipalModule { }
