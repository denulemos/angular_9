import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelComponent } from './componentes/panel/panel.component';
import { ContenidoComponent } from './componentes/contenido/contenido.component';



@NgModule({
  //Se importan los componentes creados dentro de este modulo nuestro
  declarations: [PanelComponent, ContenidoComponent],
  imports: [
    CommonModule
  ],
  //Posee un array de componentes que yo quiero exportar, tanto publicos como privados
  exports:[
PanelComponent
  ]
})
export class MimoduloModule { }
