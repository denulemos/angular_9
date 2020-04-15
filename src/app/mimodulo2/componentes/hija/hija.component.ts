import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-hija',
  templateUrl: './hija.component.html',
  styleUrls: ['./hija.component.css']
})
export class HijaComponent implements OnInit {

  // @Input('mensaje') mensajePapa : string;
  // //Evento custom
  // @Output() contestar = new EventEmitter();

  // respuestaPapa : string = ''
  // mensajeAux : string = ''

  constructor() { }

  ngOnInit(): void {
  }

  // hablar (mensaje:string){
  //   console.log(mensaje)
  //   this.respuestaPapa = mensaje
  //   //Emision de evento, contestar es un evento
  //   this.contestar.emit(mensaje)
  // }
}
