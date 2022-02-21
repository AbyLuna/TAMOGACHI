import { DashboardComponent } from '@pages/dashboard/dashboard.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent  } from '@auth/login/login.component';
import { RegisterComponent } from '@auth/register/register.component';

export const authRoutes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component:LoginComponent },


  { path: 'register', component:RegisterComponent },


];
