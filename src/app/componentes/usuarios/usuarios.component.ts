import {
  Component,
  OnInit
} from '@angular/core';
import {
  UsuariosService,
  IUsuario
} from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  //Importo usuario del tipo IUsuario
  usuarios: IUsuario[] = []

  constructor(private usuariosService: UsuariosService) {}

  //Subscribirse al observable de getUsuarios()
  ngOnInit(): void {
    this.obtenerUsuarios();
  }
  //OBTENER usuarios
  obtenerUsuarios() {
    this.usuariosService.getUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios
    })
  }

  //AGREGAR usuario
  enviarUsuario() {
    this.usuariosService.postUsuario().subscribe((usuario: IUsuario) => this.obtenerUsuarios());
  }

  //ELIMINAR usuario
  borrarUsuario(id: number) {
    this.usuariosService.deleteUsuario(id).subscribe((usuario: IUsuario) => this.obtenerUsuarios())
  }

  actualizarUsuario(id: number) {
    this.usuariosService.putUsuario(id).subscribe((usuario: IUsuario) => this.obtenerUsuarios())
  }
}
