import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtilitiesPageComponent } from './utilities-page/utilities-page.component';

const routes: Routes = [
  { path: 'utilities', component: UtilitiesPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module12RoutingModule { }
