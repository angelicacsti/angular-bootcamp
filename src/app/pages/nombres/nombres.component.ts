import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { PersonaInterface } from '../../core/interface/persona.interface';

@Component({
  selector: 'app-nombres',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './nombres.component.html',
  styleUrl: './nombres.component.css',
})
export class NombresComponent implements OnInit {
  usuarios: PersonaInterface[] = [];

  ngOnInit(): void {
    this.usuarios = [
      {
        nombre: 'Lola Perez',
        fechaNacimiento: new Date('2023-04-05'),
        tipoDocumento: 'CC',
        numeroDocumento: '1020',
        numeroCelular: 3204122123,
        email: 'lola@gmail.com',
      },
      {
        nombre: 'Pedrp Perez',
        fechaNacimiento: new Date('2023-04-05'),
        tipoDocumento: 'CC',
        numeroDocumento: '1020',
        numeroCelular: 3204122123,
        email: 'pedro@gmail.com',
      },
      {
        nombre: 'Sulma Perez',
        fechaNacimiento: new Date('2023-04-05'),
        tipoDocumento: 'CC',
        numeroDocumento: '1020',
        numeroCelular: 3204122123,
        email: 'sulma@gmail.com',
      },
      {
        nombre: 'Juanita Hernandez',
        fechaNacimiento: new Date('2023-04-05'),
        tipoDocumento: 'CC',
        numeroDocumento: '1020',
        numeroCelular: 3204122123,
        email: 'juanita@gmail.com',
      },
    ];
    console.log(this.usuarios)
  }
}
