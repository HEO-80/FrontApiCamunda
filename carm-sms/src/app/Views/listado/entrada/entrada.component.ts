import { Component, Input, OnInit } from '@angular/core';
import { Entrada} from 'c:/Proyectos/Frontend/Angular/carm-sms/src/app/Shared/Interfaces/Interfaces';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})

export class EntradaComponent implements OnInit{



  @Input() entrada: any; // Asegúrate de que el tipo coincida con tu modelo de datos de entrada


  constructor() {}

  ngOnInit(): void {
    
  }
}
