import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { YoutubeModule } from '../youtube/youtube.module';

import { MainComponent } from './main.component';
import { SortPipe } from './pipes/sort/sort.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';

@NgModule({
  declarations: [MainComponent, FilterPipe, SortPipe],
  imports: [CommonModule, CoreModule, YoutubeModule],
  exports: [MainComponent, CoreModule],
})
export class MainModule {}
