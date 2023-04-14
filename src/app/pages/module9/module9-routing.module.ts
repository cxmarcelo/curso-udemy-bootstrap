import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsPageComponent } from './components-page/components-page.component';
import { Components2PageComponent } from './components2-page/components2-page.component';

const routes: Routes = [
  { path: 'components', component: ComponentsPageComponent },
  { path: 'components2', component: Components2PageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module9RoutingModule { }
