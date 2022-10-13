import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { SearchComponent } from './components/search/search.component';
import { CardComponent } from './components/search/card/card.component';
import { StatblockComponent } from './components/search/statblock/statblock.component';
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
