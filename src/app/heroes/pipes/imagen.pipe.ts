import { Pipe, PipeTransform } from '@angular/core';
import { IHeroe } from '../interfaces/heroes.interfaces';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: IHeroe, ...args: unknown[]): string {
    return `assets/heroes/${ heroe.id }.jpg`;
  }

}
