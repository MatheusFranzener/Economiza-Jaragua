import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import CheckLogged from '../checkLogged.canactivate';

import { HomeComponent } from '../pagina-principal/home/home.component';
import { EntreEmContatoComponent } from '../economiza-jaragua/entre-em-contato/entre-em-contato.component';
import { SobreEconomizeComponent } from '../economiza-jaragua/sobre-economize/sobre-economize.component';
import { CadastrarMercadoComponent } from '../mercados/cadastrar-mercado/cadastrar-mercado.component';
import { InformacoesMercadosComponent } from '../mercados/informacoes-mercados/informacoes-mercados.component';
import { PromocoesMercadosComponent } from '../mercados/promocoes-mercados/promocoes-mercados.component';
import { CadastrarPromocaoComponent } from '../pagina-principal/cadastrar-promocao/cadastrar-promocao.component';
import { MelhoresOfertasComponent } from '../pagina-principal/melhores-ofertas/melhores-ofertas.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:"home", canActivate: [CheckLogged], children: [
      {path:"", component: HomeComponent},
      {path:"cadastrar-promocao", component: CadastrarPromocaoComponent},
      {path:"melhores-ofertas", component: MelhoresOfertasComponent},
    ]
  },
  {
    path:"mercados", canActivate: [CheckLogged], children: [
      {path:"cadastrar", component: CadastrarMercadoComponent},
      {path:"informacoes", component: InformacoesMercadosComponent},
      {path:"promocoes", component: PromocoesMercadosComponent},
    ]
  },
  {
    path:"economiza-jaragua", canActivate: [CheckLogged], children :[
      {path:"entre-em-contato", component: EntreEmContatoComponent},
      {path:"sobre", component: SobreEconomizeComponent},
    ]
  },
  {
    path:"login", children:[
      {path:"", component: LoginComponent},
      {path:"cadastro", component: CadastrarUsuarioComponent},
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [CadastrarUsuarioComponent,LoginComponent],
  exports: [CadastrarUsuarioComponent,LoginComponent]
})
export class TelaLoginModule { }
