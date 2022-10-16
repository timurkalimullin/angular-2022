import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    pathMatch: 'full',
    loadChildren: () => import('./auth/login.module').then(m => m.LoginModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./youtube/youtube.module').then(m => m.YoutubeModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingmodule {}
