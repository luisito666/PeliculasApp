import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  pelicula: any;
  back: string = "";
  busqueda: string = "";

  constructor(public _ps: PeliculasService,
    public _rta: ActivatedRoute) {
      this._rta.params.subscribe(parametros => {
        
        console.log(parametros);
        this.back = parametros['pag'];
        
        if(parametros['busqueda']){
          this.busqueda = parametros['busqueda'];
        }

        this._ps.getPelicula(parametros['id'])
              .subscribe(data => {
                this.pelicula = data;
                console.log(this.pelicula);
              })
        
      })
}
  ngOnInit() {
  }

}
