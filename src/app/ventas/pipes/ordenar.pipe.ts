import { Pipe, PipeTransform } from '@angular/core';
import { Herore } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Herore[], oredenarPor:string='Sin Valor'): Herore[] {

    switch(oredenarPor){
      case 'nombre':
      return   heroes=heroes.sort((a,b)=>( a.nombre>b.nombre) ?1:-1)
      case 'vuela':
        return   heroes=heroes.sort((a,b)=>( a.vuela>b.vuela) ?-1:1)
        case 'color':
          return   heroes=heroes.sort((a,b)=>( a.color>b.color) ?1:-1)


      default:
        return heroes;
    }

    //primer metodo para ordenar los campos en forma correcta
    // if(oredenarPor=='Sin Valor'){
    //   return heroes
    // }else{
    //   heroes=heroes.sort((a,b)=>( a.nombre>b.nombre) ?1:-1)
    // }



    // return heroes;
  }

}
