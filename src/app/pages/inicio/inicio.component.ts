import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {
  mostrarTitulo: boolean = true;

  personas = [
    {
      nombre: 'Juan',
      edad: 12,
      ciudad: 'Bogotá',
      documento: 1545,
    },
    {
      nombre: 'Pedro',
      edad: 21,
      ciudad: 'Barranquilla',
      documento: 345645,
    },
    {
      nombre: 'Lucas',
      edad: 24,
      ciudad: 'Bogotá',
      documento: 254245,
    },
    {
      nombre: 'Angélica',
      edad: 20,
      ciudad: 'Bogotá',
      documento: 154245,
    },
  ];
constructor(private router: Router) {}

cambioRuta(){
  this.router.navigateByUrl('/persona')
}
rutaArticulo(){
  this.router.navigateByUrl('/articulo')
}
abrirModal(){
  Swal.fire({
    icon: "info",
    title: "Oops...",
    text: "Something went wrong!",
    footer: '<a href="#">Why do I have this issue?</a>'
  });
}
}
