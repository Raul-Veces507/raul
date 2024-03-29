import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BasicosComponent } from './pages/basicos/basicos.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { PrimengModule } from '../primeng/primeng.module';
import { MayusculasPipe } from './pipes/Mayuscula.pipe';
import { VuelaPipe } from './pipes/vuela.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';



@NgModule({
  declarations: [
    BasicosComponent,
    NoComunesComponent,
    NumerosComponent,
    OrdenarComponent,
    MayusculasPipe,
    VuelaPipe,
    OrdenarPipe
  ],
  exports:[
    BasicosComponent,
    NoComunesComponent,
    NumerosComponent,
    OrdenarComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
 
})
export class VentasModule { }
