import {
  Injectable
} from '@angular/core';

//CONFIGURACION USE FACTORY
export class ClientesServiceUseFactory {

  clientes: string[] = [
    'Nombre1_useFac', 'Nombre2_useFac', 'Nombre3_useFac', 'Nombre4_useFac', 'Nombre5_useFac'
  ]
  constructor() {}

  //Obtener cliente
  getClientes() {
    return this.clientes;
  }
  //Agregar cliente
  pushClientes(cliente: string): void {
    this.clientes.push(cliente)
  }
  //Sacar cliente desde el final
  popCliente(): void {
    this.clientes.pop()
  }

}

export function functionClientesUseFactory(){
return new ClientesServiceUseFactory()
}

//CONFIGURACION USE CLASS

export class ClientesServiceUseClass {

  clientes: string[] = [
    'Nombre1_useClass', 'Nombre2_useClass', 'Nombre3_useClass', 'Nombre4_useClass', 'Nombre5_useClass'
  ]
  constructor() {}

  //Obtener cliente
  getClientes() {
    return this.clientes;
  }
  //Agregar cliente
  pushClientes(cliente: string): void {
    this.clientes.push(cliente)
  }
  //Sacar cliente desde el final
  popCliente(): void {
    this.clientes.pop()
  }
}

@Injectable({
  //Incorportado en Angular6 se autoprovee en el proyecto, se puede usar de forma directa
  providedIn: 'root'
})

//CONFIGURACION USE EXISTING

export class ClientesServiceUseExisting {

  clientes: string[] = [
    'Nombre1_ue', 'Nombre2_ue', 'Nombre3_ue', 'Nombre4_ue', 'Nombre5_ue'
  ]
  constructor() {}

  //Obtener cliente
  getClientes() {
    return this.clientes;
  }
  //Agregar cliente
  pushClientes(cliente: string): void {
    this.clientes.unshift(cliente)
  }
  //Sacar cliente desde el final
  popCliente(): void {
    this.clientes.pop()
  }


}

@Injectable({
  //Incorportado en Angular6 se autoprovee en el proyecto, se puede usar de forma directa
  providedIn: 'root'
})

//CONFIGURACION ORIGINAL

export class ClientesService {

  clientes: string[] = [
    'Nombre1', 'Nombre2', 'Nombre3', 'Nombre4', 'Nombre5'
  ]
  constructor() {}

  //Obtener cliente
  getClientes() {
    return this.clientes;
  }
  //Agregar cliente
  pushClientes(cliente: string): void {
    this.clientes.push(cliente)
  }
  //Sacar cliente desde el final
  popCliente(): void {
    this.clientes.pop()
  }


}
