
import { NgModule, Component } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@auth/login/login.component';
import { RegisterComponent } from '@auth/register/register.component';
import { PagesComponent } from '@pages/pages.component';
import { pagesRoutes } from '@pages/pages.routing';

const routes: Routes = [


 { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
 { path: 'login', component:LoginComponent },
 { path: 'register', component:RegisterComponent },
 { path: '**', redirectTo: 'dashboard' },
 {
   path: 'dashboard',
   component:PagesComponent,
   children: pagesRoutes
  }

];



@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule { }
