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

  getEdad(){
    return this.edad;
  }
  
  enviarDatos(value: String){
  }

  constructor() { }

  ngOnInit(): void {
  }

}
