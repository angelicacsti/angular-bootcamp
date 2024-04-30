import { Component, Input } from '@angular/core';
import { PersonaInterface } from '../../core/interface/persona.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  @Input() personas: PersonaInterface[] = [];

  ngOnInit(): void {
    console.log('Personas en el componente hijo', this.personas);
  }
}
