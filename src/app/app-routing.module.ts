import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './structure/main/main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: '', loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule), },
      { path: 'module3', loadChildren: () => import('./pages/module3/module3.module').then((m) => m.Module3Module), },
      { path: 'module4', loadChildren: () => import('./pages/module4/module4.module').then((m) => m.Module4Module), },
      { path: 'module6', loadChildren: () => import('./pages/module6/module6.module').then((m) => m.Module6Module), },
    ]
  },
  { path: 'module5', loadChildren: () => import('./pages/module5/module5.module').then((m) => m.Module5Module), },
  { path: '**', redirectTo: '/' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
