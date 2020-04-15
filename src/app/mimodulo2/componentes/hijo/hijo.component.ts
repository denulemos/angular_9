import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input('mensaje') mensajeDePapa : string;
  @Output() contestar = new EventEmitter();

  respuestaAlPadre : string = '';
  mensajeAux : string = '';

  constructor() { }

  ngOnInit() {
  }

  

  hablar(mensaje: string) {
    console.log(mensaje);
    this.respuestaAlPadre = mensaje;
    this.contestar.emit(mensaje);
  }

}
