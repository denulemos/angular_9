import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  formu={
    nombre:'',
    apellido:'',
    edad:'',
    email:'',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
  }
enviar(){
  //Reinicio inputs
  this.formu={
    nombre:'',
    apellido:'',
    edad:'',
    email:'',
    password: ''
  }
}
}
