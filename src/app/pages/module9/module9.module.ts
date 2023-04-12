import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module9RoutingModule } from './module9-routing.module';
import { ComponentsPageComponent } from './components-page/components-page.component';


@NgModule({
  declarations: [
    ComponentsPageComponent
  ],
  imports: [
    CommonModule,
    Module9RoutingModule
  ]
})
export class Module9Module { }
