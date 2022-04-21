import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InformacoesMercadosComponent } from './informacoes-mercados/informacoes-mercados.component';
import { CadastrarMercadoComponent } from './cadastrar-mercado/cadastrar-mercado.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [InformacoesMercadosComponent,  CadastrarMercadoComponent],
  exports: [InformacoesMercadosComponent,  CadastrarMercadoComponent]
})
export class MercadosModule { }
