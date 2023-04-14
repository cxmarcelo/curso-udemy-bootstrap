import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module9RoutingModule } from './module9-routing.module';
import { ComponentsPageComponent } from './components-page/components-page.component';
import { Components2PageComponent } from './components2-page/components2-page.component';


@NgModule({
  declarations: [
    ComponentsPageComponent,
    Components2PageComponent
  ],
  imports: [
    CommonModule,
    Module9RoutingModule
  ]
})
export class Module9Module { }
