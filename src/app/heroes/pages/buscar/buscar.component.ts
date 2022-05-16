import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete/autocomplete';
import { IHeroe } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino :  string = '';
  heroeList : IHeroe[] = [];
  heroeSeleccionado! : IHeroe | undefined;


  constructor(private _heroesService : HeroesService) { }

  ngOnInit(): void {
  }

  buscando () {
    this._heroesService.getSugerencias(this.termino.trim())
        .subscribe(heroes => this.heroeList = heroes )
  }

  opcionSeleccionada ( event : MatAutocompleteSelectedEvent){

    if(!event.option.value){
      this.heroeSeleccionado = undefined;
      return;
    }
    const heroe : IHeroe = event.option.value;
    this.termino = heroe.superhero;

    this._heroesService.getHeroeById( heroe.id!)
        .subscribe( heroe => this.heroeSeleccionado = heroe )
  }

}
