import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsPageComponent } from './forms-page/forms-page.component';
import { ValidationsPageComponent } from './validations-page/validations-page.component';

const routes: Routes = [
  { path: 'forms', component: FormsPageComponent },
  { path: 'validation', component: ValidationsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module7RoutingModule { }
