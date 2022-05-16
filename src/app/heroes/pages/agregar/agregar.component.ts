import { Component, OnInit } from '@angular/core';
import { IHeroe, Publisher } from '../../interfaces/heroes.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc : 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc : 'Marvel - Comics'
    }
  ];

  heroe : IHeroe = {
    superhero : '',
    alter_ego : '',
    characters : '',
    first_appearance : '',
    publisher : Publisher.DCComics,
    alt_img : ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
