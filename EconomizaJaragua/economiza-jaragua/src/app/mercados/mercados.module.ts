import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformacoesMercadosComponent } from './informacoes-mercados/informacoes-mercados.component';
import { PromocoesMercadosComponent } from './promocoes-mercados/promocoes-mercados.component';
import { CadastrarMercadoComponent } from './cadastrar-mercado/cadastrar-mercado.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InformacoesMercadosComponent, PromocoesMercadosComponent, CadastrarMercadoComponent]
})
export class MercadosModule { }
