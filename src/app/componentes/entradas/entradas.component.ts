import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent implements OnInit {

  mensaje : string = "Mensaje test"
  valor : number = 1234
  valor2 : number = 12345
  valor3 : number = 123456
  contador : number = 0
  constructor() { }

  //OnInit implementation metodo
  ngOnInit(): void {
  }

}
