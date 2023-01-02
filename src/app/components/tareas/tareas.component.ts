import { Component } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {

  listaTareas: Tarea[] = []
  nombreTarea = '';

  agregarTarea(){

    //Creacion del Objeto Tarea
    const tarea: Tarea={
      nombre: this.nombreTarea,
      estado: false
    }

    //Agregar el objeto Tarea al array
    this.listaTareas.push(tarea);

    //Resetear input
    this.nombreTarea = '';
  }

  eliminarTarea(index: number): void{
    this.listaTareas.splice(index, 1);
  }

  actualizarTarea(tarea: Tarea, index: number): void{
    this.listaTareas[index].estado = !tarea.estado
  }

}
