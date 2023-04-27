import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module10RoutingModule } from './module10-routing.module';
import { ExactTimeComponent } from './exact-time/exact-time.component';


@NgModule({
  declarations: [
    ExactTimeComponent
  ],
  imports: [
    CommonModule,
    Module10RoutingModule
  ]
})
export class Module10Module { }
