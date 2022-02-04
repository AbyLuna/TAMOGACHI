import { Component } from '@angular/core';
import { Mascota } from '@models/mascota.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {



  // public mascota: Mascota;

  // constructor() {
  //   this.opciones();
  //   this.menu();
  //   this.mascota = {
  //     nombre: '',
  //     tipo: '',
  //     vacunado: false,
  //     raza: '',
  //     fechaNacimiento: new Date,
  //     edad: '1 dia'
  //   }

  // }
  // private menu(): void {
  //   console.log('*********************MENU**************');
  //   console.log('******************Selecciona una opción*********');
  //   console.log(' 1 - Crear una mascota');
  // }

  // private opciones(): void {
  //   let toNumber = parseInt(prompt('Elija una opción') as string);

  //   if (!isNaN(toNumber)) {
  //     this.menuOpciones(toNumber);
  //   } else {
  //     alert('La opcion que ingreso es incorrecta');
  //   }
  // }

  // private menuOpciones(opt: number): void {
  //   switch(opt){
  //     case 1:

  //     break;
  //     default:
  //       alert('La opción que ingresó no está disponible');
  //   }
  // }
}

