import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {SharedModule } from '@shared/shared.module';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { authRoutes} from '@auth/auth.routing';




@NgModule({
  declarations: [ //solo portar componentes
    LoginComponent, RegisterComponent, AuthComponent
  ],
  imports: [  //solo se pueden importar modulos
    CommonModule,
    RouterModule.forChild(authRoutes)
  ]
})
export class AuthModule { }
