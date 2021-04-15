import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  constructor() { }

  items: MenuItem[] =[];

  ngOnInit(): void {
    this.items = [
      {
        label: 'pipes de Angular',
        icon: 'pi pi-desktop',
        items:[
          {
            label: 'texto y Fechas',
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
          {
            label: 'numero',
            icon: 'pi pi-dollar',
            routerLink: 'numeros'
          },
          {
            label: 'No Comunes',
            icon: 'pi pi-globe',
            routerLink: 'no-comunes'
          }]
      },
     {
       label:'Pipes Personalizado',
       icon: 'pi pi-cog',
       routerLink: 'ordenar'
     }
     
  ];
  }

}
