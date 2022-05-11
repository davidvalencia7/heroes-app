import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IHeroe } from '../interfaces/heroes.interfaces';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private readonly baseUrl : string = environment.baseUrl;

  constructor(private _http : HttpClient) { }

  getHeroes() : Observable<IHeroe[]>{
    return this._http.get<IHeroe[]>(`${ this.baseUrl }/heroes`)
  }

  getHeroeById (id : string) : Observable<IHeroe> {
    return this._http.get<IHeroe>(`${this.baseUrl}/heroes/${ id }`)
  }

  getSugerencias ( termino : string) : Observable<IHeroe[]> {
    return this._http.get<IHeroe[]>(`${ this.baseUrl }/heroes?q=${ termino }&_limit=6`);
  }

}
