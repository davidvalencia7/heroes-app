import { Component, Input, OnInit } from '@angular/core';
import { IHeroe } from '../../interfaces/heroes.interfaces';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: []
})
export class HeroeTarjetaComponent implements OnInit {


  @Input() heroe! : IHeroe ;

  constructor() { }

  ngOnInit(): void {
  }

}
