import { Component } from '@angular/core';
import { Herore, Color } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent  {

  enMayuscula:boolean=true;

  ordenarPor:string='nombre';

  heroes: Herore []=[
    {
      nombre: 'superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    },

  ]



  constructor() { }

  cambiar(){
    this.enMayuscula= !this.enMayuscula;
  
    
  }

  cambiarOrden(valor:string){
    this.ordenarPor=valor;
    console.log(valor);
  }
}
