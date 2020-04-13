import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,

} from '@angular/forms';
import {VerificarEspacios} from 'src/app/validaciones/espacios.validator'

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
      nombre: ['',  Validators.compose([
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

  ngOnInit(): void {}
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
  enviar2() {
    //Reset formulario
    this.f.reset()
  }
}
