import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Modulos Personalizados
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';


//cambiar el local de idioma

import localesEs from '@angular/common/locales/es-PA';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localesEs);




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,
    VentasModule,
    BrowserAnimationsModule
   
  ],
  providers: [
    {
      provide:LOCALE_ID,useValue:'es-PA'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
