import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

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
