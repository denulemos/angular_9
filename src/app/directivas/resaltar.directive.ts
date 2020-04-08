import {
  Directive,
  ElementRef,
  Input,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective {

  constructor(private el: ElementRef) {}

  //Segunda propiedad
  @Input() colorBase: string
  //Esta propiedad se va a inicializar con lo que le mande a appResaltar
  @Input('appResaltar') resaltarColor: string
  //Cuando pasa el mouse, Hover
  @HostListener('mouseenter') onMouseEnter() {
    this.resaltar(this.resaltarColor || this.colorBase || 'red')
  }
  //Cuando sale del Hover
  @HostListener('mouseleave') onMouseEnterLeave() {
    this.resaltar(null);
  }
  //Funcion de cambio de fondo
  private resaltar(color: string): void {
    this.el.nativeElement.style.backgroundColor = color
  }

}
