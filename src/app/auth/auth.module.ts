import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {SharedModule } from '@shared/shared.module';
import { RegisterComponent } from './register/register.component';




@NgModule({
  declarations: [ //solo portar componentes
    LoginComponent, RegisterComponent
  ],
  imports: [  //solo se pueden importar modulos
    CommonModule
  ]
})
export class AuthModule { }
