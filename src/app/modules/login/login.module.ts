import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';


import { LoginFormComponent } from './components/login-form.component';
import { LoginComponent } from './pages/login.component';

import { MaterialModule } from '../../shared/material';


@NgModule({
  declarations: [LoginComponent, LoginFormComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
