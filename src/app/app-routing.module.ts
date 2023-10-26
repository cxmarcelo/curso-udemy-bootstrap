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
      { path: 'module7', loadChildren: () => import('./pages/module7/module7.module').then((m) => m.Module7Module), },
      { path: 'module9', loadChildren: () => import('./pages/module9/module9.module').then((m) => m.Module9Module), },
      { path: 'module11', loadChildren: () => import('./pages/module11/module11.module').then((m) => m.Module11Module), },
    ]
  },
  { path: 'module5', loadChildren: () => import('./pages/module5/module5.module').then((m) => m.Module5Module), },
  { path: 'module8', loadChildren: () => import('./pages/module8/module8.module').then((m) => m.Module8Module), },
  { path: 'module10', loadChildren: () => import('./pages/module10/module10.module').then((m) => m.Module10Module), },
  { path: '**', redirectTo: '/' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
