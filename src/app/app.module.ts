import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { EntradasComponent } from './componentes/entradas/entradas.component';
import { EstructuraComponent } from './componentes/estructura/estructura.component';
import { AtributosComponent } from './componentes/atributos/atributos.component';
import { FormulariosComponent } from './componentes/formularios/formularios.component';
import { ResaltarDirective } from './directivas/resaltar.directive';
import { VerificarEspacios } from './validaciones/espacios.validator';
import { ClientesComponent } from './componentes/clientes/clientes.component';
 import { ClientesService, ClientesServiceUseExisting, ClientesServiceUseClass } from './servicios/clientes.service';

@NgModule({
  declarations: [
    AppComponent,
    EntradasComponent,
    EstructuraComponent,
    AtributosComponent,
    FormulariosComponent,
    ResaltarDirective,
    ClientesComponent
  ],
  //Importa otras librerias externas
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  //Servicios

  providers: [
    //Asi tendria que importarlo si no tuviera la directiva providedIn en el modulo
    // ClientesService

    //Si deseo cambiarle el nombre al provider
    // {provide: ClientesService, useClass: ClientesServiceUseClass}

    //USE EXISTING
    {provide: ClientesService, useExisting: ClientesServiceUseExisting}


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
