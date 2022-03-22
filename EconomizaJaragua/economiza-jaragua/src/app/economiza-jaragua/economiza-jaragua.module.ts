import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreEconomizeComponent } from './sobre-economize/sobre-economize.component';
import { EntreEmContatoComponent } from './entre-em-contato/entre-em-contato.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [SobreEconomizeComponent, EntreEmContatoComponent],
  exports: [SobreEconomizeComponent, EntreEmContatoComponent]
})
export class EconomizaJaraguaModule { }
