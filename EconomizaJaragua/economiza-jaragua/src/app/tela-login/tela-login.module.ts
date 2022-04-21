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
import { CadastrarPromocaoComponent } from '../pagina-principal/cadastrar-promocao/cadastrar-promocao.component';
import { MelhoresOfertasComponent } from '../pagina-principal/melhores-ofertas/melhores-ofertas.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:"home", children: [
      {path:"", component: HomeComponent},
      {path:"cadastrar-promocao", canActivate: [CheckLogged], component: CadastrarPromocaoComponent},
      {path:":codigo", component: MelhoresOfertasComponent},
    ]
  },
  {
    path:"mercados", children: [
      {path:"cadastrar", canActivate: [CheckLogged], component: CadastrarMercadoComponent},
      {path:"informacoes", component: InformacoesMercadosComponent}
    ]
  },
  {
    path:"economiza-jaragua", children :[
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
  exports: [CadastrarUsuarioComponent,LoginComponent],
  providers: [CheckLogged]
})
export class TelaLoginModule { }
