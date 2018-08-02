import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { map } from 'rxjs/operators';; // Map


@Injectable()
export class PeliculasService {

  private apikey:string = "939e7bee49034124ab1168722593c6b3";
  private urlMoviedb:string = "https://api.themoviedb.org/3"


  constructor(
    private jsonp:Jsonp
  ) { }


  getCartelera() {

    let desde = new Date();
    let hasta = new Date();
    hasta.setDate( hasta.getDate() + 7);

    let desdeStr = `${ desde.getFullYear()}-${ desde.getMonth() + 1 }-${desde.getDate() }`;
    let hastaStr = `${ hasta.getFullYear()}-${ hasta.getMonth() + 1 }-${hasta.getDate() }`;


    let url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${ desdeStr }&primary_release_date.lte=${ hastaStr }&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`

    return this.jsonp.get( url )
                .pipe(map(res => res.json()));

  }

  getPopulares(){
    let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`

    return this.jsonp.get( url )
                .pipe(map(res => res.json()));
  }
}
