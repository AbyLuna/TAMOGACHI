import { NgModule, Component } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@auth/login/login.component';
import { RegisterComponent } from '@auth/register/register.component';
import { PagesComponent } from '@pages/pages.component';


const routes: Routes = [


 { path: '', redirectTo: 'inicio', pathMatch: 'full'},
 { path: 'login', component:LoginComponent },
 { path: 'register', component:RegisterComponent },
 { path: '**', redirectTo: 'inicio' },
 { path: 'inicio', component:PagesComponent}
];



@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule { }
