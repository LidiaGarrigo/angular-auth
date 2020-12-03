import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './pages/users/users.component';
import { UserComponent } from './pages/user/user.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserListComponent } from './components/user-list/user-list.component';


@NgModule({
  declarations: [UsersComponent, UserComponent, UserDetailComponent, UserListComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  exports: [UsersComponent, UserComponent, UserDetailComponent]
})
export class UsersModule { }
