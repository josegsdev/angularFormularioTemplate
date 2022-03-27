import { Component, OnInit } from '@angular/core';

interface ItemMenu{
  desc:string;
  ruta:string;
}


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
  ]
})
export class SidemenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  public menuTemplate:ItemMenu[]=[
    {desc:'Basicos',ruta:`./template/basicos`},
    {desc:'Dinamicos',ruta:`./template/dinamicos`},
    {desc:'Switches',ruta:`./template/switches`}
  ];
  public menuReactive:ItemMenu[]=[
    {desc:'Basicos',ruta:`./reactive/basicos`},
    {desc:'Dinamicos',ruta:`./reactive/dinamicos`},
    {desc:'Switches',ruta:`./reactive/switches`}
  ];



}
