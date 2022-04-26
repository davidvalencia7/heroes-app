import { Component, OnInit } from '@angular/core';
import { IHeroe } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [ `
    mat-card {
      margin-top : 20px;
    }
    `
  ]
})
export class ListadoComponent implements OnInit {

  heroesList : IHeroe[] = [];

  constructor(private _heroesService : HeroesService) { }

  ngOnInit(): void {
    this._heroesService.getHeroes()
        .subscribe(resp =>{
          this.heroesList = resp;
        })
  }

}
