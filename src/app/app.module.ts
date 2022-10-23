import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { AppRoutingmodule } from './app.routing.module';
import { LoginModule } from './auth/login.module';

import { httpInterceptorProviders } from './core/interceptors';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    AppRoutingmodule,
    BrowserModule,
    LoginModule,
    NoopAnimationsModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
