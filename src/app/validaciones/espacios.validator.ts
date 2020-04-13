import {AbstractControl} from '@angular/forms';


export function VerificarEspacios(c: AbstractControl){

  //El campo esta completo?
  if (c.value == null) return null
  //El campo tiene algo? Si no hay espacio, devuelve -1, si no, el index del mismo
  if (c.value.indexOf(' ') >=0) {
    //Con espacios es lo que va a interpretar el HTML
    return {conEspacios: true}
  }
  return null
}
