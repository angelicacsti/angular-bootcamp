import { PATH } from "../core/enum/path.enum";
import { MenuInfoInterface } from "../core/interface/menu-info.interface";

export const MenuRoutes: MenuInfoInterface[]=[
    {
        path: PATH.HOME,
        title:'Home',
        icon: 'fa-solid fa-house',
        classCss:'d-flex justify-content-center',
        submenu:[],
    },
    {
        path: PATH.ACERCADE,
        title:'Acerca de',
        icon: '',
        classCss:'',
        submenu:[],
    },
    {
        path: PATH.PERSONA,
        title:'Persona',
        icon: '',
        classCss:'',
        submenu:[{
            path: PATH.IMAGEN,
            title:'Imágenes',
            icon: '',
            classCss:'',
            submenu:[],
        },],
    },
    {
        path: PATH.IMAGEN,
        title:'Imágenes',
        icon: '',
        classCss:'',
        submenu:[],
    },
    {
        path: PATH.ARTICULO,
        title:'Artículo',
        icon: '',
        classCss:'',
        submenu:[],
    },
    {
        path: PATH.CONTACTO,
        title:'Contacto',
        icon: '',
        classCss:'',
        submenu:[],
    },
    {
        path: PATH.NOMBRES,
        title:'Nombres',
        icon: '',
        classCss:'',
        submenu:[],
    }
];
 