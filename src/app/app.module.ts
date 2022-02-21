import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule } from '@app/app-routing.module';  //declaramos a rutas

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule, //impostamos ruta


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


