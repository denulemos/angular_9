import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { FamiliaComponent } from './componentes/familia/familia.component';
import { PadreComponent } from './componentes/padre/padre.component';
import { HijoComponent } from './componentes/hijo/hijo.component';
import { HijaComponent } from './componentes/hija/hija.component';
import { MadreComponent } from './componentes/madre/madre.component';
import { TioComponent } from './componentes/tio/tio.component';
import { TiaComponent } from './componentes/tia/tia.component';

@NgModule({
  declarations: [PadreComponent, HijoComponent, HijaComponent, FamiliaComponent, MadreComponent, TioComponent, TiaComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [FamiliaComponent]
})
export class MimoduloModule2 { }
