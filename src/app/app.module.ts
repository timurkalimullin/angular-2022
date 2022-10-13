import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { StatblockComponent } from './search/statblock/statblock.component';
import { CardComponent } from './search/card/card.component';
import { ColorBorderDirective } from './common/directives/color-border.directive';
import { FilterPipe } from './common/pipes/filter/filter.pipe';
import { SortPipe } from './common/pipes/sort/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    StatblockComponent,
    CardComponent,
    ColorBorderDirective,
    FilterPipe,
    SortPipe,
  ],
  imports: [CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
