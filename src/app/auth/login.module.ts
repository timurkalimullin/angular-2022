import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CoreModule } from '../core/core.module';
import { LoginRoutingmodule } from './login.routing.module';

@NgModule({
  imports: [CommonModule, CoreModule, LoginRoutingmodule],
  declarations: [LoginComponent],
  exports: [LoginComponent, LoginRoutingmodule],
})
export class LoginModule {}
