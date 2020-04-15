import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
	selector: 'app-clientes',
	templateUrl: './clientes.component.html',
	styleUrls: [ './clientes.component.css' ]
	// providers:[]
})
export class ClientesComponent implements OnInit {
	clientes: string[] = [];
	cliente: string;
	constructor(private clientesService: ClientesService) {
		this.clientes = this.clientesService.getClientes();
	}

	agregarCliente(cliente: string) {
		//Llamo al servicio y pusheo al cliente a su array
		this.clientesService.pushClientes(cliente);
	}
	borrarCliente() {
		this.clientesService.popCliente();
	}
	ngOnInit(): void {}
}
