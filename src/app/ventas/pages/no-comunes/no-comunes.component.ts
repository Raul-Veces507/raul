import { Component } from '@angular/core';

import { interval } from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

//i18nSelect
  nombre:string ='Susana';
  genero: string ='femenino';

  invitacionMapa={
    'masculino': 'invitarlo',
    'femenino':'invitarla'
  }

//i18nPlural
clientes: string []=['maria','pedro','jorge','edgar','manuel'];

clientesMapa={
  '=0': 'no tenemos ningun cliente esperando',
  '=1': 'tenemos un cliente esperando',
  '=2': 'tenemos 2 cliente esperando',
  'other':'tenemos # clientes esperando'

}

cambiarcliente(){
this.nombre='edgar',
this.genero='masculino'
}

borrarcliente(){
  this.clientes.pop();

}

//keyValue PIPIE

persona={
  nombre: 'raul',
  edad:23,
  direccion:'panama,panama oeste'
}


//Jason Pipe

heroe=[
  {
    nombre:'superman',
    vuela:true
  },
  {
    nombre:'Robin',
    vuela:false
  },
  {
    nombre:'Aqyuaman',
    vuela:false
  },
]

//Async Pipe
miObsevable= interval(2000);

valorPromesa=new Promise( ( resolve,rejects)=>{
  setTimeout(()=>{
    resolve('fin de la promesa')
  },3500)
})

}
