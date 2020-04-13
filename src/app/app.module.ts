import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import {
  AppComponent
} from './app.component';
import {
  EntradasComponent
} from './componentes/entradas/entradas.component';
import {
  EstructuraComponent
} from './componentes/estructura/estructura.component';
import {
  AtributosComponent
} from './componentes/atributos/atributos.component';
import {
  FormulariosComponent
} from './componentes/formularios/formularios.component';
import {
  ResaltarDirective
} from './directivas/resaltar.directive';
import {
  VerificarEspacios
} from './validaciones/espacios.validator';
import {
  ClientesComponent
} from './componentes/clientes/clientes.component';
import {
  ClientesService,
  ClientesServiceUseExisting,
  functionClientesUseFactory,
  ClientesServiceUseClass
} from './servicios/clientes.service';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    EntradasComponent,
    EstructuraComponent,
    AtributosComponent,
    FormulariosComponent,
    ResaltarDirective,
    ClientesComponent,
    UsuariosComponent
  ],
  //Importa otras librerias externas
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  //Servicios

  providers: [
    //Asi tendria que importarlo si no tuviera la directiva providedIn en el modulo
    // ClientesService

    //Si deseo cambiarle el nombre al provider
    // {provide: ClientesService, useClass: ClientesServiceUseClass}

    //USE EXISTING
    // {provide: ClientesService, useExisting: ClientesServiceUseExisting}

    //USE FACTORY
    // {provide: ClientesService , useFactory: functionClientesUseFactory}

    //USE VALUE, Copio y pego los metodos directamente
    // {
    //   provide: ClientesService,
    //   useValue: {
    //     clientes: [
    //       'Nombre1_useVal', 'Nombre2_useVal', 'Nombre3_useVal', 'Nombre4_useVal', 'Nombre5_useVal'
    //     ],

    //     getClientes() {
    //       return this.clientes;
    //     },

    //     pushClientes(cliente: string): void {
    //       this.clientes.push(cliente)
    //     },

    //     popCliente(): void {
    //       this.clientes.pop()
    //     }
    //   }
    // }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
