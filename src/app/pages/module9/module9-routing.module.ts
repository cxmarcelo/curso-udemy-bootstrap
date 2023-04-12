import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsPageComponent } from './components-page/components-page.component';

const routes: Routes = [
  { path: 'components', component: ComponentsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module9RoutingModule { }