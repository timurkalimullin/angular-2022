import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { YoutubeModule } from './youtube/youtube.module';

import { AppComponent } from './app.component';
import { FilterPipe } from './common/pipes/filter/filter.pipe';
import { SortPipe } from './common/pipes/sort/sort.pipe';

@NgModule({
  declarations: [AppComponent, FilterPipe, SortPipe],
  imports: [CoreModule, YoutubeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
