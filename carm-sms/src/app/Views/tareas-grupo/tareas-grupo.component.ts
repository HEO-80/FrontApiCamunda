import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/Shared/Interfaces/Interfaces';

@Component({
  selector: 'app-tareas-grupo',
  templateUrl: './tareas-grupo.component.html',
  styleUrls: ['./tareas-grupo.component.css']
})
export class TareasGrupoComponent implements OnInit{
  public listadoTareas: Tarea[] = [];
 

  constructor(){
    this.listadoTareas =[
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
    throw new Error('Method not implemented.');
  }
  
  titulo: 'tareas de Grupo' = "tareas de Grupo";
  tareas: any[] = [];
  nuevaTarea: '' = "";

  agregarTarea(): void {
    if (!this.nuevaTarea) {
      return;
    }

    const nuevaTarea = {
      nombre: this.nuevaTarea,
      completada: false
    };

    this.tareas.push(nuevaTarea);
    this.nuevaTarea = '';
  }

  marcarTarea(tarea: any): void {
    tarea.completada = !tarea.completada;
  }
}
