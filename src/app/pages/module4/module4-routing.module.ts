import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IconsPageComponent } from './icons-page/icons-page.component';

const routes: Routes = [
  { path: 'icons', component: IconsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module4RoutingModule { }
