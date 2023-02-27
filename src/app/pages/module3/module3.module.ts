import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module3RoutingModule } from './module3-routing.module';
import { ExamplesPageComponent } from './examples-page/examples-page.component';


@NgModule({
  declarations: [
    ExamplesPageComponent
  ],
  imports: [
    CommonModule,
    Module3RoutingModule
  ]
})
export class Module3Module { }
