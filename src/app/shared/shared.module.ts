import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from '@shared/navbar/navbar.component';
import { SidebarComponent } from '@shared/sidebar/sidebar.component';
import { FooterComponent } from '@shared/footer/footer.component';
import { AsideComponent } from '@shared/aside/aside.component';



@NgModule({
  declarations: [
    NavbarComponent,
     SidebarComponent,
    FooterComponent,
     AsideComponent
  ],
  imports: [
    CommonModule
  ],

  exports: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    AsideComponent
  ]


})
export class SharedModule { }
