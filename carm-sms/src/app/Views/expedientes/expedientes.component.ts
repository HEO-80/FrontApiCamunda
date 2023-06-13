import { Component } from '@angular/core';

@Component({
  selector: 'app-expedientes',
  templateUrl: './expedientes.component.html',
  styleUrls: ['./expedientes.component.css']
})
export class ExpedientesComponent {
  expedientes: string[] = [
    'Expediente 1',
    'Expediente 2',
    'Expediente 3',
    'Expediente 4',
    'Expediente 5'
  ];

  terminoBusqueda: '' = "";
  resultadosBusqueda: string[] = [];

  buscarExpedientes(): void {
    if (!this.terminoBusqueda) {
      this.resultadosBusqueda = [];
      return;
    }
  
    this.resultadosBusqueda = this.expedientes.filter(expediente =>
      expediente.toLowerCase().includes(this.terminoBusqueda.toLowerCase())
    );
  }
}