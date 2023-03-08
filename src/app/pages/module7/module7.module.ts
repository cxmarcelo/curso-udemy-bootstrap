import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module7RoutingModule } from './module7-routing.module';
import { FormsPageComponent } from './forms-page/forms-page.component';
import { ValidationsPageComponent } from './validations-page/validations-page.component';


@NgModule({
  declarations: [
    FormsPageComponent,
    ValidationsPageComponent
  ],
  imports: [
    CommonModule,
    Module7RoutingModule
  ]
})
export class Module7Module { }
