import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamplesPageComponent } from './examples-page/examples-page.component';

const routes: Routes = [
  { path: 'exemplos', component: ExamplesPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module3RoutingModule { }
