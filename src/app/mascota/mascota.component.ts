import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit {

  nombre = "Juan";
  // especie = prompt("Especie"); 
  especie = "Felino";
  
  raza = "León";
  // raza = prompt("Raza de la mascota por favor");
  private edad = 1;

  propertyhidden = true;

  propertyVisibilidadInfo = false;

  textoDePrueba = "En este momento el checkbox está en blanco";

  getEdad(){
    return this.edad;
  }

  getEspecie(){
    return this.especie;
  }
  
  enviarDatos(value: String){
  }

  setVisibilidadInfo(event :Event){
    
    //COMENTADO PARA UTILIZAR EVENT BINDING 
    // this.propertyVisibilidadInfo = (this.propertyVisibilidadInfo == true? false : true);
    this.propertyhidden = (this.propertyhidden == true? false : true);

    this.textoDePrueba = (<HTMLInputElement>event.target).value == "si"? "En este momento el checkbox está marcado :)" : "En este momento el checkbox está en blanco";
    // this.mostrarVentana();
  }

  // mostrarVentana(){
  //   // alert("Event Binding")
  //   this.textoDePrueba = (this.propertyVisibilidadInfo == true? "En este momento el checkbox está marcado :)" : "En este momento el checkbox está en blanco");

  // }

  constructor() { }

  ngOnInit(): void {
  }

}
