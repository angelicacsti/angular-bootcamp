import { Routes } from '@angular/router';
import { PersonaComponent } from './persona/persona.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ArticuloComponent } from './pages/articulo/articulo.component';
import { ImagenesComponent } from './pages/imagenes/imagenes.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { PATH } from './core/enum/path.enum';
import { NombresComponent } from './pages/nombres/nombres.component';

export const routes: Routes = [
  {
    path: PATH.HOME,
    title: 'Home',
    children: [
      //Path por defecto del path padre
      {
        path: PATH.HOME,
        title: 'Home',
        component: InicioComponent,
      },
      {
        path: PATH.ACERCADE,
        title: 'Acerca de',
        component: QuienesSomosComponent,
      },
      {
        path: PATH.PERSONA,
        title: 'Personas',
        component: PersonaComponent,
      },
      {
        path: PATH.IMAGEN,
        title: 'Imágenes',
        component: ImagenesComponent,
      },
      {
        path: PATH.ARTICULO,
        title: 'Artículo',
        component: ArticuloComponent,
      },
      {
        path: PATH.CONTACTO,
        title: 'Contacto',
        component: ContactoComponent,
      },
      {
        path: PATH.NOMBRES,
        title: 'Nombres',
        component: NombresComponent,
      },
    ],
  },
];
