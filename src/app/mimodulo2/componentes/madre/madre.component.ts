import { Component, OnInit, ViewChild  } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';


@Component({
  selector: 'app-madre',
  templateUrl: './madre.component.html',
  styleUrls: ['./madre.component.css']
})
export class MadreComponent implements OnInit  {

  @ViewChild(HijoComponent, {static: false}) hijo : HijoComponent;

  mensaje : string = '';
  contador : number =  0
  refInterval : any

  constructor() { 
    console.log('constructor madre');
  }
  
  //https://angular.io/guide/lifecycle-hooks
  ngOnInit() {
    this.refInterval = setInterval(() => {
      console.log('Soy la madre ' + this.contador++)
    },1000)
    console.log('ngOnInit madre');
  }

  ngDoCheck() {
    console.log('ngDoCheck madre');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy madre');
    clearInterval(this.refInterval)
  }

  escuchar() {
    this.mensaje = this.hijo.respuestaAlPadre;
  }
}
