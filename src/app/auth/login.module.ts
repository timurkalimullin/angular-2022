import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CoreModule } from '../core/core.module';
import { LoginRoutingmodule } from './login.routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, CoreModule, LoginRoutingmodule],
  exports: [LoginComponent, LoginRoutingmodule],
})
export class LoginModule {}
