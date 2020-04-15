import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Importar router
import { Routes, RouterModule, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EntradasComponent } from './componentes/entradas/entradas.component';
import { EstructuraComponent } from './componentes/estructura/estructura.component';
import { AtributosComponent } from './componentes/atributos/atributos.component';
import { FormulariosComponent } from './componentes/formularios/formularios.component';
import { ResaltarDirective } from './directivas/resaltar.directive';
import { VerificarEspacios } from './validaciones/espacios.validator';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import {
	ClientesService,
	ClientesServiceUseExisting,
	functionClientesUseFactory,
	ClientesServiceUseClass
} from './servicios/clientes.service';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';

//Tengo acceso al componente Panel de este modulo
import { MimoduloModule } from './mimodulo/mimodulo.module';
import { MimoduloModule2 } from './mimodulo2/mimodulo2.module';
//Importo PanelComponent del Modulo
import { PanelComponent } from './mimodulo/componentes/panel/panel.component';
import { FamiliaComponent } from './mimodulo2/componentes/familia/familia.component';

//Conf Router 2
const routes: Routes = [
	//El path vacio redirige al menu de entradas, sin pathMatch full el redirect no funciona bien
	{ path: '', redirectTo: 'entradas', pathMatch: 'full' },
	{ path: 'entradas/:id', component: EntradasComponent },
	{ path: 'atributos', component: AtributosComponent },
	{ path: 'estructura', component: EstructuraComponent },
	{ path: 'formularios', component: FormulariosComponent },
	{ path: 'clientes', component: ClientesComponent },
  { path: 'usuarios', component: UsuariosComponent },
  //Puedo agregar el PanelComponent de mi modulo en el navbar, debe ser importado
  { path: 'panel', component: PanelComponent },
  {path: 'familia' , component: FamiliaComponent}
];
@NgModule({
	declarations: [
		AppComponent,
		EntradasComponent,
		EstructuraComponent,
		AtributosComponent,
		FormulariosComponent,
		ResaltarDirective,
		ClientesComponent,
		UsuariosComponent,
		NavbarComponent
	],
	//Importa otras librerias externas
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		//Config router 3
		RouterModule.forRoot(
			routes,
			//Habilitar debug del router, por cada click se realiza un debug en consola
			{ enableTracing: true }
		),
		//Importo mi modulo personalizado en el proyecto general
    MimoduloModule,
    MimoduloModule2
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
	bootstrap: [ AppComponent ]
})
export class AppModule {}
