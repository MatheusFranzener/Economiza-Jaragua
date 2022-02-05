import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InformacoesMercadosComponent } from './mercado/informacoes-mercados/informacoes-mercados.component';
import { PromocoesMercadosComponent } from './mercado/promocoes-mercados/promocoes-mercados.component';
import { CadastrarMercadoComponent } from './mercado/cadastrar-mercado/cadastrar-mercado.component';

@NgModule({
  declarations: [
    AppComponent,
    InformacoesMercadosComponent,
    PromocoesMercadosComponent,
    CadastrarMercadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
