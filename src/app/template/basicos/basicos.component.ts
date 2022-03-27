import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('formularioPorTemplate') formulario!:NgForm;


  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    console.log(this.formulario?.controls['precio']);
  }

  validaNombre():boolean | null{
    return (this.formulario?.controls['nombre']?.invalid && this.formulario?.touched )
  }

  validaPrecio():boolean | null{
    if(this.formulario?.controls['precio']?.value < 0 ){
      this.formulario?.controls['precio']?.setErrors({precio:true});
      return true
    }
    this.formulario?.controls['precio']?.setErrors(null);
    return false
  }

}
