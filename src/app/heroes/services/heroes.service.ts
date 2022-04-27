import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IHeroe } from '../interfaces/heroes.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private _http : HttpClient) { }

  getHeroes() : Observable<IHeroe[]>{
    return this._http.get<IHeroe[]>('http://localhost:3000/heroes')
  }

  getHeroeById (id : string) : Observable<IHeroe> {
    return this._http.get<IHeroe>(`http://localhost:3000/heroes/${ id }`)
  }


}
