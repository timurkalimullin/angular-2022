import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { SearchComponent } from './pages/search/search.component';
import { CardComponent } from './components/card/card.component';
import { StatblockComponent } from './components/statblock/statblock.component';
import { ColorBorderDirective } from './directives/color-border.directive';

@NgModule({
  declarations: [
    SearchComponent,
    ColorBorderDirective,
    CardComponent,
    StatblockComponent,
  ],
  imports: [CoreModule],
  exports: [SearchComponent],
})
export class YoutubeModule {}
