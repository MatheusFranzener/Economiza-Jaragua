import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreEconomizeComponent } from './sobre-economize/sobre-economize.component';
import { EntreEmContatoComponent } from './entre-em-contato/entre-em-contato.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SobreEconomizeComponent, EntreEmContatoComponent]
})
export class EconomizaJaraguaModule { }
