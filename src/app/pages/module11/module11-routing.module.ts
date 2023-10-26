import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpersPageComponent } from './helpers-page/helpers-page.component';

const routes: Routes = [
  { path: 'helpers', component: HelpersPageComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module11RoutingModule { }
