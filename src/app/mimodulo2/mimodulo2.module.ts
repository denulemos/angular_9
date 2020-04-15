import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PadreComponent } from './componentes/padre/padre.component';
import { HijoComponent } from './componentes/hijo/hijo.component';
import { HijaComponent } from './componentes/hija/hija.component';
import { MadreComponent } from './componentes/madre/madre.component';
import { FamiliaComponent } from './componentes/familia/familia.component';



@NgModule({
  declarations: [PadreComponent, HijoComponent, HijaComponent, MadreComponent, FamiliaComponent],
  imports: [
    CommonModule
  ]
})
export class Mimodulo2Module { }
