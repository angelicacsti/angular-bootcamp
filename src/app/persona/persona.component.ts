import { Component, OnInit } from '@angular/core';
import { PersonaInterface } from '../core/interface/persona.interface';
import { TableComponent } from '../components/table/table.component';

@Component({
    selector: 'app-persona',
    standalone: true,
    templateUrl: './persona.component.html',
    styleUrl: './persona.component.css',
    imports: [TableComponent]
})
export class PersonaComponent implements OnInit {
  personas: PersonaInterface[] = [];

  ngOnInit(): void {
    this.personas = [
      {
        nombre: 'Juanito Perez',
        fechaNacimiento: new Date('2023-04-05'),
        tipoDocumento: 'CC',
        numeroDocumento: '1020',
        numeroCelular: 3204122123,
        email: 'juanito@gmail.com',
      },
      {
        nombre: 'Ana Perez',
        fechaNacimiento: new Date('2023-04-05'),
        tipoDocumento: 'CE',
        numeroDocumento: '1510',
        numeroCelular: 3204567123,
        email: 'ana@gmail.com',
      },
      {
        nombre: 'Angélica Castiblanco',
        fechaNacimiento: new Date('2023-04-26'),
        tipoDocumento: 'CC',
        numeroDocumento: '10208',
        numeroCelular: 3204127123,
        email: 'angelica@gmail.com',
      },
      {
        nombre: 'Pepito Suarez',
        fechaNacimiento: new Date('2023-10-23'),
        tipoDocumento: 'CC',
        numeroDocumento: '1128',
        numeroCelular: 3204527123,
        email: 'pepito@gmail.com',
      },
    ];
    console.log(this.personas);
  }
}
