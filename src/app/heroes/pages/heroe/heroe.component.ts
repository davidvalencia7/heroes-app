import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { IHeroe } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  id : string = '';
  heroe! : IHeroe;


  constructor(private _route: ActivatedRoute, private _HeroeService : HeroesService) { }

  ngOnInit(): void {
    //tomar id  ActivatedRoute
     this._route.params
          .pipe(
            switchMap(({id}) => this._HeroeService.getHeroeById(id))
          )
        .subscribe( heroe => this.heroe = heroe)

  }

}
