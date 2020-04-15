import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  mensajeDelPadre : string;
  mensajeDelHijo : string;
  mensajeDelaHija : string;
  mensajeAux : string = '';

  constructor() { }

  ngOnInit() {
  }

  public hablar(mensaje: string) {
    this.mensajeDelPadre = mensaje;
  }

  escucharHijo(mensaje: string) {
    console.log('mensaje del hijo');
    this.mensajeDelHijo = mensaje;
  }

  escucharHija(mensaje: string) {
    console.log('mensaje de la hija');
    this.mensajeDelaHija = mensaje;
  }

}
