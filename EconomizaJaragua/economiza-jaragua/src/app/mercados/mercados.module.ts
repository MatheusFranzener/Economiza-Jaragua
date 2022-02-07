import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InformacoesMercadosComponent } from './informacoes-mercados/informacoes-mercados.component';
import { PromocoesMercadosComponent } from './promocoes-mercados/promocoes-mercados.component';
import { CadastrarMercadoComponent } from './cadastrar-mercado/cadastrar-mercado.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [InformacoesMercadosComponent, PromocoesMercadosComponent, CadastrarMercadoComponent],
  exports: [InformacoesMercadosComponent, PromocoesMercadosComponent, CadastrarMercadoComponent]
})
export class MercadosModule { }
