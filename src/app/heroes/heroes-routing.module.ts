import { NgModule } from '@angular/core';

import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { Routes, RouterModule } from '@angular/router';
import { BuscarComponent } from './pages/buscar/buscar.component';

const rutas : Routes = [
  {
    path : '',
    children : [
      {
        path : 'listado',
        component : ListadoComponent
      },
      {
        path : 'agregar',
        component : AgregarComponent
      },
      {
        path : 'editar/:id',
        component : AgregarComponent
      },
      {
        path : 'buscar',
        component : BuscarComponent
      },
      {
        path : ':id',
        component : HeroeComponent
      },
      {
        path : '**',
        redirectTo : 'listado'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(rutas)
  ],
  exports : [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
