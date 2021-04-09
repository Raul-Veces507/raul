import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

 nombreLower:string='Raul';
 nombreUper:string='RAUL';
 nombrecompleto:string='RauL VecEs';

 fecha: Date=new Date();

 

}
