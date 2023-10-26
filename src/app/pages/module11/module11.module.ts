import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module11RoutingModule } from './module11-routing.module';
import { HelpersPageComponent } from './helpers-page/helpers-page.component';


@NgModule({
  declarations: [
    HelpersPageComponent
  ],
  imports: [
    CommonModule,
    Module11RoutingModule
  ]
})
export class Module11Module { }
