import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent implements OnInit {

  mensaje : string = "Mensaje test"
  valor : number = 12
  valor2 : number = 123
  valor3 : number = 1234
  contador : number = 0

  constructor() { }

  //OnInit implementation metodo
  ngOnInit(): void {
  }

  modificar(e){
    let dato = e.target.value
     console.log("modificar entro" , dato)
     this.valor3 = dato
  }

}
