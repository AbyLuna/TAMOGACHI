import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@app/app-routing.module';  //declaramos a rutas
import  { AuthModule  } from '@auth/auth.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule, //impostamos ruta
    AuthModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


