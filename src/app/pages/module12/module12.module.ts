import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module12RoutingModule } from './module12-routing.module';
import { UtilitiesPageComponent } from './utilities-page/utilities-page.component';


@NgModule({
  declarations: [
    UtilitiesPageComponent
  ],
  imports: [
    CommonModule,
    Module12RoutingModule
  ]
})
export class Module12Module { }
