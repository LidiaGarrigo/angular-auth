<<<<<<< HEAD
=======
import { ReactiveFormsModule } from '@angular/forms';
>>>>>>> 7e883036157ea6e5674dabed29c134fa3f3ad3de
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
<<<<<<< HEAD
import { LoginFormComponent } from './components/login-form.component';
import { LoginComponent } from './pages/login.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginFormComponent, LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ]
=======


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
>>>>>>> 7e883036157ea6e5674dabed29c134fa3f3ad3de
})
export class LoginModule { }
