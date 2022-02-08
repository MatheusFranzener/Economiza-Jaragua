import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import CheckLogged from './checkLogged.canactivate';
import { AppComponent } from './app.component';
import { LoginComponent } from './tela-login/login/login.component';

import { EconomizaJaraguaModule } from './economiza-jaragua/economiza-jaragua.module';
import { MercadosModule } from './mercados/mercados.module';
import { PaginaPrincipalModule } from './pagina-principal/pagina-principal.module';
import { TelaLoginModule } from './tela-login/tela-login.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
      RouterModule.forRoot([
        {
        path: "",
        component: LoginComponent,
        canActivate: []
      }
    ]),

    BrowserModule,
    FormsModule,
    EconomizaJaraguaModule,
    MercadosModule,
    PaginaPrincipalModule,
    TelaLoginModule
  ],

  providers: [CheckLogged],
  bootstrap: [AppComponent]
})
export class AppModule { }
