import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/Shared/Interfaces/Interfaces';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit{
  public listadoEntradas: Entrada[];

  constructor(){
  this.listadoEntradas =[
    {
    titulo: 'Introduccion',
    resumen:  'En eta sección realizaremos una pequeña introducción'
  },
  {
    titulo: 'Resolución de problemas',
    resumen:  'En eta sección resolveremos los problemas que tienen los usuarios '
  },
  {
    titulo: 'Cosas necesarias',
    resumen:  'En eta sección vamos a informar de los requisitos necesarios para poder realizar los tramites'
  }
];

}



  ngOnInit(): void {
    
  }
  
  mostrarTitulo(titulo: string): void{
    alert(`Entrada selecciónada: ${ titulo }.`);
  }

}
