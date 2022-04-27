import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { IHeroe } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    `
    img {
      width : 100%;
    }
    
    `
  ]
})
export class HeroeComponent implements OnInit {

  id : string = '';
  heroe! : IHeroe;


  constructor(private _ActiveRoute: ActivatedRoute, private _HeroeService : HeroesService, private _router : Router ) { }

  ngOnInit(): void {
    //tomar id  ActivatedRoute
     this._ActiveRoute.params
          .pipe(
            switchMap(({id}) => this._HeroeService.getHeroeById(id))
          )
        .subscribe( heroe => this.heroe = heroe)

  }

  regresar () {

    this._router.navigate(['/heroes/listado']);

  }

}
