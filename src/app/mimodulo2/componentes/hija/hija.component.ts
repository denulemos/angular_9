import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hija',
  templateUrl: './hija.component.html',
  styleUrls: ['./hija.component.css']
})
export class HijaComponent implements OnInit {

  @Input('mensaje') mensajeDePapa : string
  @Output() contestar = new EventEmitter();

  mensajeAux : string = '';

  constructor() { }

  ngOnInit() {
  }

  hablar(mensaje: string) {
    console.log(mensaje);
    this.contestar.emit(mensaje);
  }

}
