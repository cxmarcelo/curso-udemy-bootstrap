import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module5RoutingModule } from './module5-routing.module';
import { ArtProjectPageComponent } from './art-project-page/art-project-page.component';


@NgModule({
  declarations: [
    ArtProjectPageComponent
  ],
  imports: [
    CommonModule,
    Module5RoutingModule
  ]
})
export class Module5Module { }
