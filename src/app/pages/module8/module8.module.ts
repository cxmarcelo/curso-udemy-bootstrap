import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module8RoutingModule } from './module8-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    Module8RoutingModule
  ]
})
export class Module8Module { }
