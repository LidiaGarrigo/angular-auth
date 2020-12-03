import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './pages/users/users.component';
import { UserComponent } from './pages/user/user.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RegisterComponent } from './pages/register/register.component';
import { MaterialModule } from './../../shared/material';


@NgModule({
  declarations: [RegisterComponent, UsersComponent, UserComponent, RegisterFormComponent, UserDetailComponent, UserListComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [RegisterComponent, UsersComponent, UserComponent]
})
export class UsersModule { }
