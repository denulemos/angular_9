//Logica del componente en typescript
import { Component } from '@angular/core';

//Decorador: Se le dan caracteristicas a la clase segun su configuracion. Es parecido a una Herencia.
@Component({
  //El selector dice de que manera el html va a interpretar a este componente.
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //De que manera se interpretara esta clase
  title = 'angularTraining';
}
