import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estructura',
  templateUrl: './estructura.component.html',
  styleUrls: ['./estructura.component.css']
})
export class EstructuraComponent implements OnInit {

  mostrar: boolean = true
  personas: string[] = [
    'persona1' , 'persona2' , 'persona3' , 'persona4'
  ]
  personas2:Array<string> = [
    'persona1' , 'persona2' , 'persona3' , 'persona4'
  ]
  alumnos : Object[] = [
    {nombre: 'Juan', apellido: 'Perez', edad: 23, curso: true, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png'},
    {nombre: 'Ana', apellido: 'Gonzalez', edad: 21, curso: false, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/9_avatar-512.png'},
    {nombre: 'Pablo', apellido: 'Mei', edad: 25, curso: false, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png'},
    {nombre: 'Cecilia', apellido: 'Picos', edad: 22, curso: true, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  eliminarAlumno(index){
    this.alumnos.splice(index,1)
  }

  agregarAlumno(){
    let alumno =   {nombre: 'Diego', apellido: 'Picccos', edad: 22, curso: true, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-128.png'}

    this.alumnos.push(alumno)
  }
}
