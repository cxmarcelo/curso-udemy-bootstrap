import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module6RoutingModule } from './module6-routing.module';
import { ContentPageComponent } from './content-page/content-page.component';


@NgModule({
  declarations: [
    ContentPageComponent
  ],
  imports: [
    CommonModule,
    Module6RoutingModule
  ]
})
export class Module6Module { }
