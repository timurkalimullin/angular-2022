import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { YoutubeRoutingModule } from './youtube.routing.module';
import { SearchComponent } from './pages/search/search.component';
import { CardComponent } from './components/card/card.component';
import { StatblockComponent } from './components/statblock/statblock.component';
import { ColorBorderDirective } from './directives/color-border.directive';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { SortPipe } from './pipes/sort/sort.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';

@NgModule({
  declarations: [
    SearchComponent,
    ColorBorderDirective,
    CardComponent,
    StatblockComponent,
    NotfoundComponent,
    FilterPipe,
    SortPipe,
  ],
  imports: [CoreModule, YoutubeRoutingModule],
  exports: [SearchComponent],
  providers: [],
})
export class YoutubeModule {}
