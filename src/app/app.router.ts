import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './componentes/home/home.component';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'buscar', component: BuscarComponent },
    { path: 'peliculas', component: PeliculasComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
]


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);