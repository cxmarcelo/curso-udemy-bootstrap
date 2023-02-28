import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtProjectPageComponent } from './art-project-page/art-project-page.component';

const routes: Routes = [
  { path: 'art-project', component: ArtProjectPageComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module5RoutingModule { }
