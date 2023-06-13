import { Component } from '@angular/core';

@Component({
  selector: 'app-mis-tareas',
  templateUrl: './mis-tareas.component.html',
  styleUrls: ['./mis-tareas.component.css']
})
export class MisTareasComponent {
  tareas: any[] = []; // Lista de tareas

  nombreTarea!: string;
  descripcionTarea!: string;

  agregarTarea(): void {
    // Verificar si los campos están vacíos
    if (!this.nombreTarea || !this.descripcionTarea) {
      return; // No hacer nada si alguno de los campos está vacío
    }

    // Crear un objeto de tarea con los datos ingresados
    const nuevaTarea = {
      nombre: this.nombreTarea,
      descripcion: this.descripcionTarea,
      completada: false
    };

    // Agregar la tarea a la lista de tareas
    this.tareas.push(nuevaTarea);

    // Reiniciar los campos del formulario
    this.nombreTarea = '';
    this.descripcionTarea = '';
  }
}
  
  
