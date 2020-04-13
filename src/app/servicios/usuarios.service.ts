import {
  Injectable
} from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import {
  catchError
} from 'rxjs/operators'
import {
  throwError
} from 'rxjs';
//Creo Interfaz
export interface IUsuario {
  //Todo menos el ID y el CreatedAt ya que de eso se encarga el servicio
  "nombre": string,
  "foto": string,
  "apellido": string,
  "direccion": string,
  "descripcion": string
}



@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  //URL de Servicio mock
  private url: string = 'https://5e94a070f591cb0016d8140c.mockapi.io/clientes/'

  constructor(private http: HttpClient) {

  }

  //Para cubrir el parametro headers
  getHttpOptions() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return httpOptions
  }
  //Callback para manejo de errores de comunicacion
  handleError(error: HttpErrorResponse) {
    //Chequear si hay algun codigo de error particular
    if (error.error instanceof ErrorEvent) {
      console.log("Error FrontEnd", error.error.message)
    } else {
      console.log('Error backend')
    }
    return throwError('Error de comunicacion http')
  }
  //Obtener usuarios
  getUsuarios() {
    return this.http.get < IUsuario[] > (this.url).pipe(
      catchError(this.handleError)
    )
  }

  //Agregar usuario
  postUsuario() {
    let usuario = {
      //Todo menos el ID y el CreatedAt ya que de eso se encarga el servicio
      "nombre": "Baylee",
      "foto": "https://s3.amazonaws.com/uifaces/faces/twitter/rtyukmaev/128.jpg",
      "apellido": "Ward",
      "direccion": "348 Dortha Lock",
      "descripcion": "You can't hack the card without programming the virtual AGP protocol!"

    }
    return this.http.post < IUsuario > (this.url, usuario, this.getHttpOptions()).pipe(
      catchError(this.handleError)
    )
  }
  putUsuario(id: number) {
    //Se va a actualizar al usuario por este nuevo
    let usuario: IUsuario = {
      "nombre": "Baylee",
      "foto": "https://s3.amazonaws.com/uifaces/faces/twitter/rtyukmaev/128.jpg",
      "apellido": "Ward",
      "direccion": "348 Dortha Lock",
      "descripcion": "You can't hack the card without programming the virtual AGP protocol!"
    }
    return this.http.put < IUsuario > (this.url + id, usuario, this.getHttpOptions()).pipe(
      catchError(this.handleError)
    )
  }
  deleteUsuario(id: number) {
    //Concateno el id para completar la URL
    return this.http.delete < IUsuario > (this.url + id).pipe(
      catchError(this.handleError)
    )
  }




}
