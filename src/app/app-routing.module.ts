import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './structure/main/main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: '', loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule), },
      { path: 'module3', loadChildren: () => import('./pages/module3/module3.module').then((m) => m.Module3Module), },
      //{ path: 'access-control', loadChildren: () => import('./pages/access-control/access-control.module').then((m) => m.AccessControlModule), },
    ]
  },
  //{ path: 'accessDenied', component: AccessdeniedComponent },
  { path: '**', redirectTo: '/' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
