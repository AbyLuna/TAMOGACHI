import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [ //solo portar componentes
    LoginComponent
  ],
  imports: [  //solo se pueden importar modulos
    CommonModule
  ]
})
export class AuthModule { }
