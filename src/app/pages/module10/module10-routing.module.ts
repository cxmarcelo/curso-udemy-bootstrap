import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExactTimeComponent } from './exact-time/exact-time.component';

const routes: Routes = [
  { path: 'exact-time', component: ExactTimeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module10RoutingModule { }
