
import { NgModule, Component } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from '@auth/auth.component';
import { LoginComponent } from '@auth/login/login.component';
import { RegisterComponent } from '@auth/register/register.component';
import { PagesComponent } from '@pages/pages.component';
import { pagesRoutes } from '@pages/pages.routing';

const routes: Routes = [
 { path: '', redirectTo: 'auth', pathMatch: 'full'},

 {
  path: 'dashboard',
   component:PagesComponent,
   children: [

     {
        path: '',
       loadChildren: () => import('@pages/pages.module').then(module => module.PagesModule)
    }
   ]

  },

  {

    path: 'auth',
   component:AuthComponent,
   children: [

     {
        path: '',
       loadChildren: () => import('@auth/auth.module').then(module => module.AuthModule)
    }
   ]
  },
  { path: '**', redirectTo: 'auth' }

];



@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule { }
