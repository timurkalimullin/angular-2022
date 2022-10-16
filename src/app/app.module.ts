import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingmodule } from './app.routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, AppRoutingmodule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
