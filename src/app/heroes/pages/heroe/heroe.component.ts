import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  id! : Observable<string>;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    //tomar id  ActivatedRoute
     this._route.params.subscribe(({id}) => this.id = id);
     //console.log(this.id);
  }

}
