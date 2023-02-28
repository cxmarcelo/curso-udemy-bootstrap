import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module4RoutingModule } from './module4-routing.module';
import { IconsPageComponent } from './icons-page/icons-page.component';


@NgModule({
  declarations: [
    IconsPageComponent
  ],
  imports: [
    CommonModule,
    Module4RoutingModule
  ]
})
export class Module4Module { }
