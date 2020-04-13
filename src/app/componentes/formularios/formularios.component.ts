import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,

} from '@angular/forms';
import {
  VerificarEspacios
} from 'src/app/validaciones/espacios.validator'

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  formu = {
    nombre: '',
    apellido: '',
    edad: '',
    email: '',
    password: ''
  }
  //Ademas de los datos de cada campo va a tener acceso a las validaciones de los campos y a sus estados.
  f: FormGroup
  //Primer metodo que se ejecuta ante la creacion del componente en la vista
  constructor(private fb: FormBuilder) {
    this.f = fb.group({
      nombre: ['', Validators.compose([
        Validators.required,
        VerificarEspacios
      ])],
      apellido: '',
      edad: '',
      contacto: fb.group({
        email: '',
        telefono: ''
      }),
      password: ''
    })

  }

  ngOnInit(): void {
    //GET con Fetch
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(rta => console.log(rta)) //Va a mostrar todos los objetos que tiene
  }
  enviar() {
    //Reinicio inputs
    this.formu = {
      nombre: '',
      apellido: '',
      edad: '',
      email: '',
      password: ''
    }
  }
  //ENVIO DE DATOS DE UN REACTIVE FORM A UN BACKEND
  enviar2() {
    //fetch post, para mandar data a la nube, ya es un metodo de navegador
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'post',
      body: JSON.stringify(this.f.value), //Debo pasarlo a formato JSON
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json()).then(rta => console.log(rta))
    this.f.reset()
  }
}
