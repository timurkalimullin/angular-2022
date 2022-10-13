import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent, NotfoundComponent } from './pages';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
