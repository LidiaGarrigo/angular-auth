import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {path:'', component: UsersComponent},
  {path:'register', component: RegisterComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
