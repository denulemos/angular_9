import {
  Injectable
} from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
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
  //Obtener usuarios
  getUsuarios() {
    return this.http.get < object[] > (this.url)
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
    return this.http.post < object > (this.url, usuario, this.getHttpOptions())
  }
  putUsuario(id: number) {
    //Se va a actualizar al usuario por este nuevo
    let usuario={
      "nombre": "Baylee",
      "foto": "https://s3.amazonaws.com/uifaces/faces/twitter/rtyukmaev/128.jpg",
      "apellido": "Ward",
      "direccion": "348 Dortha Lock",
      "descripcion": "You can't hack the card without programming the virtual AGP protocol!"
    }
    return this.http.put < object > (this.url + id, usuario, this.getHttpOptions())
  }
  deleteUsuario(id: number) {
    //Concateno el id para completar la URL
    return this.http.delete(this.url + id)
  }




}
