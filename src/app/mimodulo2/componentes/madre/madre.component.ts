import { Component, OnInit, ViewChild } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';

@Component({
	selector: 'app-madre',
	templateUrl: './madre.component.html',
	styleUrls: [ './madre.component.css' ]
})
export class MadreComponent implements OnInit {
	//Permite entrar en las propiedades y metodos del hijo haciendolos propios
	// @ViewChild(HijoComponent, { static: false })
	// hijo: HijoComponent;

	// mensaje: string = '';
   contador: number = 0;
   refInterval : any

	 constructor() {
	 	console.log('Constructor madre');
	 }

	 ngOnInit(): void {
		this.refInterval(() => {
			console.log('Soy la madre' + this.contador++);
    }, 1000 //Cada un segundo saca un mensaje en consola
    );
		console.log('OnInit Madre');
	 }

	// //Chequeo de estados => Lifecycle hooks
	// ngOnDestroy(): void {
	// 	//Desaparece de la vista
  //   console.log('OnDestroy Madre');
  //   clearInterval(this.refInterval); //Para que no siga infinitamente contando

	// }

	// escuchar() {
	// 	//Entra al objeto de referencia hijo y entra al objeto respuestaPapa, ya que puede acceder a todo lo del hijo, los metodos deben ser publicos
	// 	this.mensaje = this.hijo.respuestaPapa;
	// }
}
