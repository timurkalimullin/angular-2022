import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { YoutubeModule } from '../youtube/youtube.module';

import { MainComponent } from './main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [CoreModule, YoutubeModule],
  exports: [MainComponent, CoreModule],
})
export class MainModule {}
