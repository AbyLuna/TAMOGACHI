import { DashboardComponent } from '@pages/dashboard/dashboard.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const pagesRoutes: Routes = [

  { path: '', redirectTo: 'inicio', pathMatch: 'full'},
  { path: 'inicio', component:DashboardComponent },
  { path: '**', redirectTo: 'inicio' }

];

