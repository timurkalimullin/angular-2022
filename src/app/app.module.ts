import { NgModule } from '@angular/core';
import { MainModule } from './main/main.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [MainModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
