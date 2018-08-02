import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

// Servicios
import { PeliculasService } from './services/peliculas.service';

// Rutas
import { APP_ROUTING } from './app.router';

import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscarComponent,
    NavbarComponent,
    PeliculasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    APP_ROUTING
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
