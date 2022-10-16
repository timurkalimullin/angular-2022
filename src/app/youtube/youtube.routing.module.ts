import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent, NotfoundComponent, DetailcardComponent } from './pages';

const routes: Routes = [
  { path: '404', component: NotfoundComponent, pathMatch: 'full' },
  { path: '', component: MainComponent },
  { path: ':id', component: DetailcardComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
