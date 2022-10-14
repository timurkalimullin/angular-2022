import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent, NotfoundComponent, DetailcardComponent } from './pages';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: ':id', component: DetailcardComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
